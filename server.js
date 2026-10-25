// Minimal server: serves the site and proxies the Gemini call so the API key stays secret.
// Needs Node 18+ (built-in fetch). Only extra packages: express, dotenv.
require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public"))); // serves public/index.html, style.css, script.js, images/

// "gemini-flash-latest" always points at the current Flash model. Override with GEMINI_MODEL in .env.
const MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
const TIMEOUT_MS = 12000; // give up after this long so the page can show its canned answer
// Different Gemini versions accept different "thinking" settings. Try the fastest one the model
// accepts; the first one that works is remembered.
const THINKING_LADDER = [{ thinkingLevel: "minimal" }, { thinkingLevel: "low" }, { thinkingBudget: 0 }, null];
let thinkingIdx = 0;

const SYSTEM = `You are a Brother at "Thatch Support", a help desk in a muddy 1665 English village.
Reply to the peasant's woe with ONE piece of terrible, absurd, confident advice in simple old English
(thou, thy, hath, doth, -eth). Be funny, dry and deadpan. Never give real medical or legal advice.
React to the specific thing they wrote (their words), not just the category.
Keep it to 1-3 short sentences, under 50 words. Mention the village or terrain if it helps the joke.
Output only the advice, no quotes, no preamble.`;

app.post("/api/counsel", async (req, res) => {
  // The reason for a failure is only sent when you are testing on your own computer.
  const local = ["localhost", "127.0.0.1", "::1"].includes(req.hostname);
  const fail = (code, why) => {
    console.error("[counsel] failed:", why);
    res.status(code).json({ error: "upstream", why: local ? why : undefined });
  };

  if (!process.env.GEMINI_API_KEY) {
    return fail(500, "GEMINI_API_KEY was not found. Check .env sits next to server.js (exact name), then restart.");
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const started = Date.now();

  try {
    const { name = "", woe = "", text = "", village = "", terrain = "" } = req.body || {};
    const user =
      `Village: ${String(village).slice(0, 60)} (${String(terrain).slice(0, 40)})\n` +
      `Peasant: ${String(name).slice(0, 60)}\n` +
      `Kind of woe: ${String(woe).slice(0, 80)}\n` +
      `Their words: ${String(text).slice(0, 600) || "(they only groaned)"}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
    const callGemini = (thinking) => {
      const generationConfig = { temperature: 1, maxOutputTokens: 600 };
      if (thinking) generationConfig.thinkingConfig = thinking;
      return fetch(url, {
        method: "POST",
        signal: controller.signal,
        headers: { "content-type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents: [{ role: "user", parts: [{ text: user }] }],
          generationConfig
        })
      });
    };

    let r;
    for (;;) {
      r = await callGemini(THINKING_LADDER[thinkingIdx]);
      if (r.ok) break;
      const detail = (await r.text()).replace(/\s+/g, " ").slice(0, 220);
      if (r.status === 400 && /think/i.test(detail) && thinkingIdx < THINKING_LADDER.length - 1) {
        thinkingIdx += 1; // this model does not accept that setting, so try the next
        continue;
      }
      return fail(502, "Gemini (" + MODEL + ") answered " + r.status + ": " + detail);
    }

    const data = await r.json();
    const parts = (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) || [];
    const counsel = parts.map((p) => p.text || "").join("").trim();
    if (!counsel) return fail(502, "Gemini sent back an empty reply.");
    console.log("[counsel] AI replied in " + (Date.now() - started) + "ms");
    res.json({ counsel });
  } catch (e) {
    fail(500, e.name === "AbortError" ? "Gemini took longer than " + TIMEOUT_MS / 1000 + " seconds." : "Could not reach Gemini: " + e.message);
  } finally {
    clearTimeout(timer);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Thatch Support open at http://localhost:" + PORT);
  console.log("Gemini key: " + (process.env.GEMINI_API_KEY ? "loaded" : "MISSING (check .env)") + " | model: " + MODEL);
});