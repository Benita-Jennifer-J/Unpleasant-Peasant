(function () {
  "use strict";

  /* Folder (inside public/) holding p1.jpeg ... p4.jpeg. */
  var IMG_DIR = "images/";

  var CATS = [
    { id: "plague", name: "The Plague", blurb: "A red cross on the neighbour's door, and mine feeleth warm.",
      keys: ["plague", "pest", "sick", "fever", "dying", "bubo", "cross"],
      ans: [
        "Wear a live chicken on thy head. The plague shall go for the chicken first, it being taller. If the chicken dieth, get a bigger chicken.",
        "Sit very close to thy privy and breathe deep. Foul air chaseth out foul air. Any fool knoweth this, and thou art plainly one.",
        "Eat only onions and speak to no one. Thou shalt not be cured, but none shall come near enough to catch it."
      ] },
    { id: "tax", name: "The Hearth Tax Man", blurb: "A fellow with a ledger hath counted my chimney.",
      keys: ["tax", "collector", "ledger", "hearth", "coin", "debt", "owe", "chimney"],
      ans: [
        "Remove thy hearth. No hearth, no tax. Thou shalt be very cold, but very legal.",
        "Hide under the bed and hope he thinketh thee a large dog. If he kicketh thee, bark.",
        "Tell him thou art dead. He shall be sorry for thy loss, then tax thy estate."
      ] },
    { id: "roof", name: "The Roof Leaketh", blurb: "Rain cometh in as though invited.",
      keys: ["roof", "leak", "rain", "drip", "thatch", "damp", "ceiling"],
      ans: [
        "Rain is the sky weeping for thee. Sit beneath it and weep back until ye are even.",
        "Put thy cow on the roof. The rain shall hit the cow first, and that is the cow's problem.",
        "Remove the roof. No roof, no leak. This is called Progress."
      ] },
    { id: "lord", name: "My Lord Hath Raised the Rent", blurb: "He doubled it, and he owneth three hats.",
      keys: ["lord", "rent", "landlord", "squire", "master", "evict", "manor"],
      ans: [
        "Become shorter. A lord looketh high and shall miss thee entirely. Practise stooping.",
        "Pay in compliments. Praise his horse, his hat, and his chin. He shall accept, then evict thee.",
        "Gift him a goose. It shall not lower the rent, but it shall trouble him as thou hast been troubled."
      ] },
    { id: "crops", name: "The Harvest Hath Failed", blurb: "The turnips are the size of marbles, and bitter ones.",
      keys: ["crop", "harvest", "turnip", "field", "wheat", "grain", "famine", "hungry", "hunger", "starv", "food", "bread"],
      ans: [
        "Plant thy debts. They grow without water, sun, or kindness.",
        "Apologise to the soil, loudly, before the neighbours. Shame doth what manure will not.",
        "Sell thy turnips as Small Turnips of Distinction. No one shall check."
      ] },
    { id: "witch", name: "Accused of Witchcraft", blurb: "Goody Hobbs saith my cat is not a cat.",
      keys: ["witch", "hex", "curse", "cat", "sorcer", "devil", "spell"],
      ans: [
        "Offer to be thrown in the pond. Float and thou art a witch. Sink and thou art innocent, and also drowned. Both are final.",
        "Deny everything, very quietly. A denial no one heareth cannot be doubted.",
        "Accuse Goody Hobbs first, and loudly. It is the oldest cure and it worketh well. For thee."
      ] },
    { id: "war", name: "The War, Whichever One", blurb: "Two armies passed through and each took a cow.",
      keys: ["war", "soldier", "army", "pike", "roundhead", "cavalier", "king", "cromwell", "charles", "musket"],
      ans: [
        "Pick a side. Pick the one that taketh thy cow politely. Politeness is rare in a pikeman.",
        "Paint thy last cow to look like a hedge. Soldiers never steal hedges.",
        "Declare thy hut a nation. It shall not help, but thou shalt have a flag, and a flag is a fine thing to be shot beside."
      ] },
    { id: "winter", name: "Bitter Cold", blurb: "Frost upon the inside of the door, and likewise the stew.",
      keys: ["cold", "frost", "freez", "winter", "snow", "chill", "shiver"],
      ans: [
        "Wear thy sheep. Then wear a second sheep over the first. Warmth is merely a matter of sheep.",
        "Run on the spot until spring. It taketh some months, so begin now.",
        "Sit on thy neighbour's lap. Do not ask. Time is short and manners are shorter."
      ] },
    { id: "tooth", name: "The Toothache", blurb: "A tooth doth throb like a drum at a hanging.",
      keys: ["tooth", "teeth", "ache", "jaw", "gum"],
      ans: [
        "Hit thyself on the other tooth. The new pain shall be so great thou forgettest the first.",
        "Tie the tooth to a door and slam it. If the door be thine, thou must mend it. If not, run.",
        "Pay the barber a groat. He shall remove the tooth, the one beside it, and a little of thy dignity."
      ] },
    { id: "cow", name: "The Cow Ate the Thatch", blurb: "She hath eaten the roof and looketh pleased.",
      keys: ["cow", "ox", "cattle", "calf", "bull", "milk"],
      ans: [
        "Feed her the rest of the roof. Then she is happy, thou hast no roof, and thy priorities are clear.",
        "Become the cow's tenant. By right of eating, she owneth the house now.",
        "Eat the cow. Now the thatch is in thee, and the matter is closed."
      ] },
    { id: "pig", name: "Neighbour's Pig in My Garden", blurb: "It hath eaten my cabbages and showeth no remorse.",
      keys: ["pig", "hog", "swine", "boar", "piglet", "sow"],
      ans: [
        "Befriend the pig. Soon it is thy pig, and thy neighbour hath a quarrel, which is nearly a hobby.",
        "Bring thine own pig and let the pigs settle it. Pigs are fair and have no lawyers.",
        "Eat the pig and say it died of natural causes. No one asketh, there being so many."
      ] },
    { id: "ale", name: "The Ale Is Weak", blurb: "Small beer, smaller than my hopes.",
      keys: ["ale", "beer", "drink", "thirst", "tavern", "brew", "pub"],
      ans: [
        "Drink more of it. Quantity is its own strength.",
        "Tell thyself it is stronger. The mind is mighty, though thine is already a bit weak.",
        "Stir it with a boot. The boot addeth strength, character, and a faint cheese."
      ] },
    { id: "mud", name: "Mud. So Much Mud.", blurb: "It is in the bed, the bread, and my opinions.",
      keys: ["mud", "dirty", "filth", "muck", "dirt", "clean", "soil", "puddle"],
      ans: [
        "Embrace it. Mud is merely earth that hath stopped trying. Be more like mud.",
        "Wear it as a hat. It maketh thee taller, and more fashionable than any lord.",
        "Move somewhere with less mud. There is none. Stay and be filthy, as God intended."
      ] }
  ];

  var OTHER = [
    "We have pondered thy woe at length, which is to say a moment. Stand in a field and think about what thou hast done.",
    "Our Brothers advise thee to lie down. If it persisteth, lie down more.",
    "Thy trouble is the humours. Have thyself bled and the problem shall be smaller, thou being smaller.",
    "Shout at it. If it shouteth back, it is a spirit, and thou needest a different help desk. We have none.",
    "Pray, then wait. Both are free, and they are all we can promise.",
    "Walk in a circle three times and speak kindly to a hen. We have not tried it either, but we hear it is pleasing."
  ];

  var VILLAGES = [
    { id: "mountain", name: "Craggeby Top", terrain: "The Mountain", img: "p1.jpeg",
      imgAlt: "Craggeby Top, a village on a mountain",
      motto: "Closer to heaven, and the weather.",
      pop: "Pop. 41, and a goat",
      features: ["Thin air and thinner soup", "Sheep with strong opinions", "One road, which is also the river"],
      afflictions: ["Rockfalls", "Goats", "Thin air", "Wolves"],
      lede: "The mountain giveth, mostly rocks. Open a notice to see what we told the last fellow, who is now somewhere lower.",
      woes: [
        { id: "m-fall", name: "The Mountain Hath Fallen", blurb: "Much of the hillside is now in my kitchen.",
          keys: ["avalanche", "rock", "landslide", "boulder", "snow", "slide", "mountain", "stone"],
          ans: [
            "Call the boulder a guest. It hath come far and shall not be moved. Set a place for it at supper.",
            "Pray to the mountain. It hath not answered, but it is plainly listening, having just dropped by.",
            "Move thy house to where the rock hath already fallen. Lightning striketh not twice. Rocks are another matter."
          ] },
        { id: "m-goat", name: "The Goat Hath Opinions", blurb: "He standeth on my roof and judgeth me.",
          keys: ["goat", "kid", "billy", "horn", "butt", "nanny"],
          ans: [
            "Agree with the goat. He shall be unbearable, but he shall come down.",
            "Make the goat reeve. Thou obeyest him already, so let it be lawful.",
            "Climb onto the roof and judge him back. Keep eye contact."
          ] },
        { id: "m-air", name: "The Air Is Thin", blurb: "I climbed to the privy and had to lie down.",
          keys: ["air", "breath", "thin", "altitude", "dizzy", "climb", "steep", "faint"],
          ans: [
            "Breathe twice as fast. If thou faintest, thou breathed too much or too little. We cannot say which.",
            "Go down. Then thou mayst complain of the mud, as is proper.",
            "Carry a bellows and puff thyself up before each stair. Thy neighbours shall think thee mad, and out of breath."
          ] },
        { id: "m-wolf", name: "Wolves of a Better Class", blurb: "They howl in rhyme, and my sheep are listening.",
          keys: ["wolf", "wolves", "howl", "predator", "fang", "sheep", "flock"],
          ans: [
            "Dress thy sheep as wolves. The wolves shall be so embarrassed they shall leave.",
            "Howl back. If thy voice is finer, thou winnest by reputation.",
            "Offer them thy neighbour. Be clear which house."
          ] }
      ] },

    { id: "forest", name: "Grimwood End", terrain: "The Forest", img: "p2.jpeg",
      imgAlt: "Grimwood End, a village in a dark forest",
      motto: "Where the sunlight dareth not.",
      pop: "Pop. 63, ten of them lost",
      features: ["Trees that lean in to listen", "Paths that move at night", "Mushrooms of doubtful character"],
      afflictions: ["Getting lost", "Outlaws", "Mushrooms", "The King's deer"],
      lede: "The forest hath many eyes and no manners. Open a notice to see what we told the last traveller, if he ever findeth his way back.",
      woes: [
        { id: "f-lost", name: "I Am Lost in the Forest", blurb: "I have passed the same oak nine times, and it groweth rude.",
          keys: ["lost", "forest", "path", "wander", "wood", "oak", "way", "trail"],
          ans: [
            "Stay put and let the forest come to thee. It always doth, usually in the dark.",
            "Follow the moss. It groweth on the north side of trees, and on thy north side too, by now.",
            "Tie a ball of thread to thy hut. Then find thou hast no thread. A lesson, at least."
          ] },
        { id: "f-outlaw", name: "Outlaws, and Their Songs", blurb: "They stole my cart and then sang about it.",
          keys: ["outlaw", "robber", "thief", "bandit", "rob", "highway", "steal", "stole", "cart"],
          ans: [
            "Give them thy purse before they ask. It spareth them the trouble, and thee the song.",
            "Join them. The hats are excellent and the work is no worse than farming.",
            "Pretend to be a tree. Outlaws have never once looked at a tree."
          ] },
        { id: "f-mush", name: "The Mushroom Hath Spoken", blurb: "I ate the red one, and now I am in conversation with the soup.",
          keys: ["mushroom", "toadstool", "fungus", "poison", "ate", "eat", "soup"],
          ans: [
            "Eat the rest. A pause in mid-poisoning is a waste.",
            "Lie down and listen. The mushroom hath much to say, mostly about thy neighbours.",
            "Ask the mushroom if it is poisonous. If it saith no, it lieth, and thy first symptom shall prove it."
          ] },
        { id: "f-deer", name: "The King's Deer Ate My Garden", blurb: "I may not touch it, and it may touch everything.",
          keys: ["deer", "stag", "game", "hunt", "antler", "venison", "poach", "garden"],
          ans: [
            "Be a deer. Stand still and eat the cabbages together. No one shall suspect thee, least of all the cabbages.",
            "Apologise to the deer. It is the King's, and rank hath its privileges.",
            "Hang a sign: Property of the Crown. The deer shall be more embarrassed than thou."
          ] }
      ] },

    { id: "sea", name: "Soggy Saltwick", terrain: "The Sea", img: "p3.jpeg",
      imgAlt: "Soggy Saltwick, a village by the sea",
      motto: "Damp since the Flood.",
      pop: "Pop. 88, and many crabs",
      features: ["Fish, in a general sense", "Gulls of great audacity", "A tide with a grudge"],
      afflictions: ["Flooding", "Gulls", "No fish", "Smugglers"],
      lede: "The sea taketh and rarely returneth. Open a notice to see what we told the last fisherman, who is now somewhat wetter.",
      woes: [
        { id: "s-flood", name: "The Sea Hath Entered the House", blurb: "It came for a visit and hath stayed the winter.",
          keys: ["sea", "flood", "tide", "wave", "water", "wet", "drown", "storm", "sink"],
          ans: [
            "Put thy furniture in the sea. It is a matter of perspective, and thou hast the right to one.",
            "Ask the sea to leave. Politely. If it refuseth, ask again in Latin.",
            "Build a very short wall. Short walls are cheap, and the sea hath a fine sense of humour."
          ] },
        { id: "s-fish", name: "The Fish Will Not Come", blurb: "I have cast my net thirty times and caught one boot, twice.",
          keys: ["fish", "net", "herring", "cod", "catch", "boat", "boot", "bait"],
          ans: [
            "Tell the fish thou art not fishing. They are contrary and shall come to spite thee.",
            "Eat the boot. It is thy only catch, and full of charm.",
            "Become a fish. Thou hast the face for it, and the brain already."
          ] },
        { id: "s-gull", name: "The Gulls Took My Dinner", blurb: "One took my bread, one my hat, and I think the third took my wife.",
          keys: ["gull", "seagull", "bird", "bread", "squawk", "beak", "dinner"],
          ans: [
            "Eat fast and look as though thou hadst not. A gull respecteth only confidence.",
            "Wear a hat made of another gull. It frighteneth the rest, and the neighbours.",
            "Reason with the gulls. Expect nothing, but the debate shall be thorough."
          ] },
        { id: "s-smug", name: "Smugglers in the Cellar", blurb: "They have many barrels of brandy, and they live in my cellar.",
          keys: ["smuggl", "brandy", "barrel", "cellar", "contraband", "customs", "excise", "rum"],
          ans: [
            "Ask for a share. It is not a bribe, it is rent.",
            "Tell the customs man, then deny it to the smugglers. Live between two fires. It is warm.",
            "Drink the evidence. The law cannot punish thee for an empty cellar."
          ] }
      ] },

    { id: "barren", name: "Drybone Moor", terrain: "The Barren Lands", img: "p4.jpeg",
      imgAlt: "Drybone Moor, a village in barren lands",
      motto: "Nothing grows here, and we grew used to it.",
      pop: "Pop. 29, and one tree (disputed)",
      features: ["A single tree, owned by seven families", "Soil that hath given up", "A wind with something to say"],
      afflictions: ["Nothing grows", "Dust", "Wind", "A dry well"],
      lede: "Nothing groweth here but resentment. Open a notice to see what we told the last farmer, who is now a philosopher.",
      woes: [
        { id: "b-grow", name: "Nothing Will Grow", blurb: "I planted a turnip and the ground returned it with a note.",
          keys: ["grow", "plant", "barren", "seed", "sow", "soil", "desert", "famine", "empty", "turnip"],
          ans: [
            "Plant a rumour. Rumours thrive in any ground and need no rain.",
            "Sow thy pride. Thou hast plenty and it groweth abundantly, if never usefully.",
            "Bury thy seeds and give a speech. The soil shall be moved. The seeds shall not."
          ] },
        { id: "b-dust", name: "The Dust Is in Everything", blurb: "It is in my bread, my beer, and my prayers.",
          keys: ["dust", "sand", "grit", "cough", "choke", "dirt"],
          ans: [
            "Wear the dust. It is cheaper than cloth and goeth with everything.",
            "Cough with confidence. A good cough declareth thy place in the parish.",
            "Eat the dust and call it flour. That is what flour is, only with fewer dreams."
          ] },
        { id: "b-wind", name: "The Wind Took the Roof", blurb: "It also took the hens, the washing, and a neighbour I never liked.",
          keys: ["wind", "gale", "blow", "breeze", "gust", "blew", "roof"],
          ans: [
            "Hold on. It shall pass, or thou shalt, and either way the matter is closed.",
            "Face the wind and shout. It cannot hear thee, but it shall feel judged.",
            "Tie thy roof to thy cow. The cow shall resist, which is more than the roof ever did."
          ] },
        { id: "b-well", name: "The Well Is Dry", blurb: "I lowered the bucket and heard a distant sigh.",
          keys: ["well", "water", "thirst", "bucket", "drought", "spring", "dry"],
          ans: [
            "Dig deeper. When thou meetest the Devil, ask him for a drink. He keepeth a cellar.",
            "Lower thy expectations to match. Thou shalt be less thirsty for hope, at least.",
            "Cry into the well. It is a small gift, but it is thine, and salty."
          ] },
        { id: "b-tree", name: "Seven Families, One Tree", blurb: "It is my turn for the shade, and Hob hath been in it since Lent.",
          keys: ["tree", "shade", "share", "dispute", "neighbour", "neighbor", "boundary", "hob"],
          ans: [
            "Cut it in seven equal parts. No one hath shade, but justice is done.",
            "Sit in it forever. Possession is nine tenths, and the rest is stubbornness.",
            "Declare the tree a bishop and appeal to the Church. Trees have been settled on less."
          ] }
      ] }
  ];

  var ASSIGN = [
    "Brother Oswin (cannot read, writeth anyway)",
    "Goodwife Marjory (hard of hearing, and of heart)",
    "Young Tobias (aged nine, in charge)",
    "A goose (acting manager)",
    "Sir Reginald Dunnock (drunk, but on duty)",
    "Old Nell (asleep, but reachable by poking)"
  ];
  var PRIO = ["Whenever", "Next Michaelmas", "After thy burial", "Low, owing to the weather", "When the King returneth"];

  function $(s, r) { return (r || document).querySelector(s); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- views ---------- */
  var intro = $("#intro"), vill = $("#villages"), desk = $("#desk"), stage = $("#intro-stage");
  var cur = null;
  function allWoes() { return (cur ? cur.woes : []).concat(CATS); }
  function show(which) {
    intro.hidden = which !== "intro";
    vill.hidden = which !== "villages";
    desk.hidden = which !== "desk";
    stage.classList.toggle("wide", which !== "intro");
    window.scrollTo(0, 0);
    var t = which === "desk" ? $("#desk-title") : which === "villages" ? $("#villages-title") : $("#intro-title");
    if (t && t.focus) { try { t.focus({ preventScroll: true }); } catch (e) { t.focus(); } }
  }
  $("#enter").addEventListener("click", function () { show("villages"); });
  $("#back").addEventListener("click", function () { show("intro"); });
  $("#vback").addEventListener("click", function () { show("intro"); });
  $("#change").addEventListener("click", function () { show("villages"); });

  /* ---------- villages ---------- */
  function li(t) { return "<li>" + t + "</li>"; }
  function imgTag(v) {
    return '<img class="vimg" src="' + IMG_DIR + v.img + '" alt="' + v.imgAlt + '" loading="lazy">';
  }

  var vgrid = $("#vgrid");
  VILLAGES.forEach(function (v) {
    var a = document.createElement("article");
    a.className = "vcard";
    a.innerHTML =
      imgTag(v) +
      '<div class="vbody">' +
      '<p class="vterrain">' + v.terrain + "</p>" +
      '<h2 class="vname">' + v.name + "</h2>" +
      '<p class="vmotto">“' + v.motto + "”</p>" +
      '<p class="vpop">' + v.pop + "</p>" +
      '<span class="clabel" style="margin-top:8px">Distinctive features</span>' +
      '<ul class="vlist">' + v.features.map(li).join("") + "</ul>" +
      '<span class="clabel">Prominent afflictions</span>' +
      '<ul class="vtags">' + v.afflictions.map(li).join("") + "</ul>" +
      '<button type="button" class="btn">Seek counsel in ' + v.name + "</button>" +
      "</div>";
    a.querySelector("button").addEventListener("click", function () { selectVillage(v.id); });
    vgrid.appendChild(a);
  });

  function buildCard(c) {
    var d = document.createElement("details"); d.className = "card";
    var s = document.createElement("summary");
    var n = document.createElement("span"); n.className = "cname"; n.textContent = c.name;
    var b = document.createElement("span"); b.className = "cblurb"; b.textContent = "“" + c.blurb + "”";
    s.appendChild(n); s.appendChild(b);
    var p = document.createElement("div"); p.className = "counsel";
    var l = document.createElement("span"); l.className = "clabel"; l.textContent = "Our counsel";
    var t = document.createElement("p"); t.textContent = c.ans[0];
    p.appendChild(l); p.appendChild(t);
    d.appendChild(s); d.appendChild(p);
    return d;
  }

  var localGroup = null;
  function selectVillage(id) {
    cur = VILLAGES.filter(function (v) { return v.id === id; })[0] || null;
    if (!cur) { return; }
    $("#desk-eyebrow").textContent = "Parish of " + cur.name;
    $("#desk-scene").innerHTML = imgTag(cur);
    $("#vb-terrain").textContent = cur.terrain;
    $("#vb-motto").textContent = "“" + cur.motto + "”";
    $("#vb-pop").textContent = cur.pop;
    $("#vb-tags").innerHTML = cur.afflictions.map(li).join("");
    $("#local-h").textContent = "Woes Peculiar to " + cur.name;
    $("#local-lede").textContent = cur.lede;

    var lc = $("#vcards");
    lc.innerHTML = "";
    cur.woes.forEach(function (c) { lc.appendChild(buildCard(c)); });

    var sel2 = $("#woe-type");
    if (localGroup && localGroup.parentNode) { localGroup.parentNode.removeChild(localGroup); }
    localGroup = document.createElement("optgroup");
    localGroup.label = "Peculiar to " + cur.name;
    cur.woes.forEach(function (c) {
      var o = document.createElement("option");
      o.value = c.id; o.textContent = c.name; localGroup.appendChild(o);
    });
    sel2.insertBefore(localGroup, sel2.children[1]);
    sel2.value = "";
    $("#receipt").hidden = true;
    $("#form-error").hidden = true;
    show("desk");
  }

  /* ---------- fleeing (page 1) ---------- */
  var fleeMsgs = [
    "The gate is barred. From the outside. Rude.",
    "Thou tryest again. The gate remaineth barred and slightly smug.",
    "A dog guardeth the gate. It is not a friendly dog.",
    "Fine. Flee, then. But only to the next page. Press once more."
  ];
  var fleeIdx = 0;
  var fleeBtn = $("#flee"), fleeMsg = $("#flee-msg");
  fleeBtn.addEventListener("click", function () {
    if (fleeIdx >= fleeMsgs.length) { show("villages"); return; }
    fleeMsg.textContent = fleeMsgs[fleeIdx];
    fleeIdx += 1;
    if (!reduce) {
      fleeBtn.classList.remove("shake");
      void fleeBtn.offsetWidth;
      fleeBtn.classList.add("shake");
    }
    if (fleeIdx >= fleeMsgs.length) { fleeBtn.textContent = "Flee (to the villages)"; }
  });

  /* ---------- queue that only groweth ---------- */
  var q = 4127, qEl = $("#queue");
  function paintQ() { qEl.textContent = q.toLocaleString("en-GB"); }
  setInterval(function () {
    var r = Math.random();
    if (r < 0.6) { q += 1 + Math.floor(Math.random() * 3); }
    else if (r < 0.8) { q -= 1; }
    paintQ();
  }, 4200);

  /* ---------- woe list and cards ---------- */
  var sel = $("#woe-type");
  var commonGroup = document.createElement("optgroup");
  commonGroup.label = "Common to all parishes";
  CATS.forEach(function (c) {
    var o = document.createElement("option");
    o.value = c.id; o.textContent = c.name; commonGroup.appendChild(o);
  });
  var oo = document.createElement("option");
  oo.value = "other"; oo.textContent = "Something else, and most woeful";
  commonGroup.appendChild(oo);
  sel.appendChild(commonGroup);

  var cards = $("#cards");
  CATS.forEach(function (c) { cards.appendChild(buildCard(c)); });

  /* ---------- the woe form ---------- */
  function match(text) {
    var t = text.toLowerCase(), best = null, score = 0;
    allWoes().forEach(function (c) {
      var s = 0;
      c.keys.forEach(function (k) { if (t.indexOf(k) > -1) { s += 1; } });
      if (s > score) { score = s; best = c; }
    });
    return best;
  }

  var form = $("#grievance"), err = $("#form-error"), out = $("#receipt");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = $("#woe-name").value.trim() || "A Nameless Wretch";
    var type = sel.value;
    var text = $("#woe-text").value.trim();

    if (!type && !text) {
      err.textContent = "Thou hast chosen no woe and written none. Pick one, or describe it below. Even a groan will do.";
      err.hidden = false;
      return;
    }
    err.hidden = true;

    var cat = null;
    if (type && type !== "other") {
      cat = allWoes().filter(function (c) { return c.id === type; })[0] || null;
    } else if (text) {
      cat = match(text);
    }
    var counsel = cat ? pick(cat.ans) : pick(OTHER);
    var topic = cat ? cat.name : "A Woe Most Unclassified";

    q += 1; paintQ();
    var turnips = Math.floor(Math.random() * 3);

    out.innerHTML =
      '<div class="rhead"><h3 class="rno">Ticket No. <span id="r-no"></span></h3><span class="stamp">Unresolved</span></div>' +
      '<dl class="rlist" id="r-list"></dl>' +
      '<div class="rcounsel"><span class="clabel">Our counsel</span><p id="r-counsel"></p></div>' +
      '<div class="rfeed"><span class="clabel">Was this counsel of use?</span>' +
      '<div class="rbtns"><button type="button" class="btn small" data-v="aye">Aye, most helpful</button>' +
      '<button type="button" class="btn small" data-v="nay">Nay, it is worse</button></div>' +
      '<p id="r-feed" role="status"></p></div>';

    $("#r-no").textContent = q.toLocaleString("en-GB");
    var counselEl = $("#r-counsel");
    counselEl.textContent = "Our Brothers are conferring. One is asleep. Pray wait...";

    /* Ask Gemini through our own server. The typed words go in "text". If anything fails,
       the canned counsel from above is shown instead. On localhost a small red note says why. */
    var DEBUG = /^(localhost|127\.0\.0\.1|)$/.test(location.hostname);
    function devNote(msg) {
      if (!DEBUG) { return; }
      var n = document.createElement("p");
      n.style.cssText = "font-size:.85rem;color:#8e2a1a;font-style:normal;margin:8px 0 0";
      n.textContent = "(Dev note: " + msg + " Showing a canned answer.)";
      counselEl.parentNode.appendChild(n);
    }
    var slow = setTimeout(function () { counselEl.textContent = "The Brother is deliberating..."; }, 4000);
    fetch("/api/counsel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        woe: topic,
        text: text,
        village: cur ? cur.name : "",
        terrain: cur ? cur.terrain : ""
      })
    })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, status: r.status, d: d }; });
      })
      .then(function (x) {
        clearTimeout(slow);
        if (x.ok && x.d && x.d.counsel) { counselEl.textContent = x.d.counsel; return; }
        counselEl.textContent = counsel;
        devNote((x.d && x.d.why) ? x.d.why : "the server answered " + x.status + ". Is this the right server, not Live Server or an old one?");
      })
      .catch(function () {
        clearTimeout(slow);
        counselEl.textContent = counsel;
        devNote("could not reach /api/counsel. Open http://localhost:3000 with node server.js running.");
      });

    var dl = $("#r-list");
    function row(k, v) {
      var dt = document.createElement("dt"); dt.textContent = k;
      var dd = document.createElement("dd"); dd.textContent = v;
      dl.appendChild(dt); dl.appendChild(dd);
    }
    row("Lodged by", name);
    row("Nature of woe", topic);
    if (text) { row("Thy words", "“" + text + "”"); }
    row("Assigned to", pick(ASSIGN));
    row("Priority", pick(PRIO));
    row("Confidence of cure", (turnips === 1 ? "1 turnip" : turnips + " turnips") + " out of 5");

    var fb = $("#r-feed");
    var btns = out.querySelectorAll("button[data-v]");
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener("click", function () {
        fb.textContent = b.getAttribute("data-v") === "aye"
          ? "Thy praise is carved on a stone and dropped in a well. Thanks for thy feedback. It shall be ignored with great care."
          : "Thy complaint is filed beneath the cow. Thanks for thy feedback. It shall be ignored with great care.";
        Array.prototype.forEach.call(btns, function (x) { x.disabled = true; });
      });
    });

    out.hidden = false;
    out.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });
})();