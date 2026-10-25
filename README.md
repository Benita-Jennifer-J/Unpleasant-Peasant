# Unpleasant-Peasant
# The Unpleasant Pleasant

*Help for peasants. Not good help. But help.*

A silly 1600s help desk called **Thatch Support**. Pick a village, tell the Brothers about thy woe, and receive terrible advice in old English. The advice is written live by an AI (Google Gemini), with a stash of pre-written answers as a backup.

## Features

- **A proclamation page** with a very reluctant "Flee in terror" button.
- **Four villages**, each with its own picture, motto, afflictions and local woes: Craggeby Top (mountain), Grimwood End (forest), Soggy Saltwick (sea) and Drybone Moor (barren lands).
- **A help desk** where thou canst choose a woe from a list or describe it in thine own words, and get a ticket with a counsel, an assigned Brother, a priority, and a "confidence of cure" rated in turnips.
- **AI-written counsel** from Gemini, in simple, funny old English.
- **Fallback answers**: if the AI call fails, the page falls back to pre-written counsel, so it never breaks.
- **A queue that only groweth**, plus notices nailed to the door and questions nobody asked.
- Light and dark mode, and reduced-motion support.

## Project structure

```
Unpleasant-Peasant/
├── server.js        # Express server + the /api/counsel route that calls Gemini
├── package.json
├── .env             # your secret key (never commit this)
├── .env.example     # template for .env
├── .gitignore
└── public/
    ├── index.html
    ├── style.css
    ├── script.js
    └── images/      # p1.jpeg ... p4.jpeg, one per village
```

## Getting started

### 1. What thou needest

- [Node.js](https://nodejs.org) version 18 or newer
- A Gemini API key from [Google AI Studio](https://aistudio.google.com)

### 2. Install

```bash
npm install
```

### 3. Add thy key

Create a file called `.env` in the project root (next to `server.js`):

```
GEMINI_API_KEY=your-key-here
```

No quotes, and no spaces around the `=`. Optionally, choose a different model:

```
GEMINI_MODEL=gemini-flash-latest
```

### 4. Run

```bash
npm start
```

Then open **http://localhost:3000** in thy browser. The server prints `Gemini key: loaded` at startup if the key was found.

> Open the site through `localhost:3000`. If thou openest `index.html` straight from thy files, the page works but only shows the pre-written counsel, because the AI call needs the server.

## How the AI part works

1. Thou submits thy woe on the help desk page.
2. `script.js` sends it (name, kind of woe, thy words, village) to `/api/counsel` on the local server.
3. `server.js` adds the secret API key and asks Gemini for a short, funny piece of terrible advice in old English.
4. The reply is shown on the ticket. If anything goes wrong, a pre-written counsel is shown instead.

The API key stays on the server and is never sent to the browser.

## Customising

- **Change the images:** replace `p1.jpeg` to `p4.jpeg` in `public/images/`. To change which village gets which picture, edit the `img` field of each village in `public/script.js`.
- **Change the AI's personality:** edit the `SYSTEM` prompt near the top of `server.js`.
- **Add woes or answers:** edit the `CATS` list and each village's `woes` list in `public/script.js`.
- **Change the colours:** the theme variables are at the top of `public/style.css`.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `Cannot GET /` | The server can't find `public/index.html`. Run `npm start` from the project root. |
| Key not found | Check `.env` is next to `server.js`, is named exactly `.env`, and contains `GEMINI_API_KEY=...`. Restart the server after editing it. |
| Only pre-written answers appear | Check the terminal for a `Gemini error` message, and open the browser console for red errors. |
| `EADDRINUSE` (port already in use) | Stop the old server: `kill -9 $(lsof -ti :3000)` |
| Village pictures are broken | Check the files in `public/images/` are named exactly `p1.jpeg` to `p4.jpeg`. |

## Safety note

Never commit `.env`. It is listed in `.gitignore`, and thou canst check with `git check-ignore .env`. If a key is ever pushed by accident, make a new one in Google AI Studio.

## License

See the `LICENSE` file.
