const allArtifacts = [
  {
    title: "💾 Vampire Shrine of 1999",
    image: "images/vampire_shrine.webp",
    caption: "Under Construction... Forever",
    year: "1999"
  },
  {
    title: "🖥️ Eternal Webring Hub",
    image: "images/webring_hub.webp",
    caption: "Last linked in 2003",
    year: "2003"
  },
  {
    title: "🦇 Gothic Forum Archive",
    image: "images/goth_forum.webp",
    caption: "Only 4 posts... ever",
    year: "2001"
  },
  {
    title: "🌌 Lost MIDI Blog",
    image: "images/lost_MIDI.webp",
    caption: "Last updated 2000. Still plays music.",
    year: "2000"
  },
  {
    title: "🧬 Fanfic Server Node",
    image: "images/Fanfic_Server_Node.webp",
    caption: "All links are broken, except one.",
    year: "2002"
  },
  {
    title: "💀 Angel of Death's Guestbook",
    image: "images/Death_Guestbook.webp",
    caption: "Signed by ghosts. Last entry: 1998.",
    year: "1998"
  },
  {
    title: "🛸 Alien Abduction Logs",
    image: "images/Alien_Abduction_Logs",
    caption: "Last sighting: 2004. Discredited?",
    year: "2004"
  },
  {
    title: "🎮 Game Clan HQ",
    image: "images/Game_Clan_HQ.webp",
    caption: "Three members. One match recorded.",
    year: "2001"
  },
  {
    title: "📟 ASCII Shrine",
    image: "images/ASCII_Shrine.webp",
    caption: "All text. All strange. Still hosted.",
    year: "1997"
  },
  {
    title: "🧛‍♀️ The Crimson Blog",
    image: "images/The_Crimson_Blog.webp",
    caption: "Her last entry ends mid-sentence...",
    year: "1999"
  }
  {
  title: "🖤 Chain Email Confession",
  image: "images/chain_email.webp",
  caption: "Forwarded 666 times... never broken.",
  year: "2000"
},
{
  title: "🧙‍♀️ GeoCities Witch Tips",
  image: "images/witch_tips.webp",
  caption: "Last spell posted on a lunar eclipse.",
  year: "1998"
},
{
  title: "📼 Web Tape Archive",
  image: "images/web_tape.webp",
  caption: "Only plays on Netscape 4.7.",
  year: "1999"
},
{
  title: "🔐 Angelfire Journal Vault",
  image: "images/journal_vault.webp",
  caption: "Locked behind broken JavaScript.",
  year: "2001"
},
{
  title: "🕳️ Guestbook of Regrets",
  image: "images/guestbook_regrets.webp",
  caption: "Entries removed, but still felt.",
  year: "2002"
},
{
  title: "🔮 Tarot Chatroom Logs",
  image: "images/tarot_chat.webp",
  caption: "The cards predicted her disappearance.",
  year: "2003"
},
{
  title: "⛓ Y2K Doom Countdown",
  image: "images/y2k_countdown.webp",
  caption: "The world didn’t end. But something changed.",
  year: "1999"
},
{
  title: "📡 Angel DSL Shrine",
  image: "images/angel_dsl.webp",
  caption: "Worshipped the speed of 56kbps.",
  year: "2000"
},
{
  title: "🌀 Java Applet Trap",
  image: "images/applet_trap.webp",
  caption: "You're stuck unless you click the red X.",
  year: "2002"
},
{
  title: "📁 Deep Zip Directory",
  image: "images/deep_zip.webp",
  caption: "No one remembers what it held.",
  year: "2001"
}

];

let unusedArtifacts = [...allArtifacts];

const phrases = [
  "Webrings once connected us.",
  "Nobody updated this since 2002.",
  "She left one message… then never came back.",
  "This button goes nowhere.",
  "Under Construction. Still."
];

let deepWebMode = false;
const animations = ["fade-in", "slide-in-left", "slide-in-right", "zoom-in", "skew-in"];
let exploreClickCount = 0;

document.getElementById("toggle-mode").addEventListener("click", () => {
  deepWebMode = !deepWebMode;
  document.body.classList.toggle("deep", deepWebMode);
});

function getRandomUnusedArtifact() {
  if (unusedArtifacts.length === 0) {
    unusedArtifacts = [...allArtifacts];
  }
  const index = Math.floor(Math.random() * unusedArtifacts.length);
  const [artifact] = unusedArtifacts.splice(index, 1);

  const r = Math.random();
  if (r < 0.01) {
    return {
      title: "🧱 404 Room",
      image: "images/goth_forum.webp",
      caption: "A broken thread with no replies... just echoes.",
      year: "??"
    };
  } else if (r < 0.015) {
    return {
      title: "🎶 Secret Myspace Page",
      image: "images/webring_hub.webp",
      caption: "Autoplay: Evanescence – Bring Me to Life",
      year: "2004"
    };
  }

  if (Math.random() < 0.05) {
    artifact.title = `⚠️ ${artifact.title}`;
    artifact.caption = "▒▒▒ DATA CORRUPTION ▒▒▒";
  }

  if (deepWebMode) {
    artifact.title = glitchText(artifact.title);
    artifact.caption = glitchText(artifact.caption);
  }
  return artifact;
}

function glitchText(text) {
  return text.replace(/[aeiou]/gi, (c) => `&#${c.charCodeAt(0) + 5000};`);
}

function renderArtifact() {
  exploreClickCount++;
  if (exploreClickCount === 13) {
    launchMiniGame();
    return;
  }

  const artifact = getRandomUnusedArtifact();
  const container = document.getElementById("artifact-container");
  const el = document.createElement("div");
  const animClass = animations[Math.floor(Math.random() * animations.length)];
  el.className = `artifact ${animClass}`;
  el.innerHTML = `
    <h2>${artifact.title}</h2>
    <img src="${artifact.image}" alt="${artifact.title}" loading="lazy" />
    <p><small>${artifact.caption} ~${artifact.year}</small></p>
  `;
  container.appendChild(el);
}

function showNarration() {
  const el = document.getElementById("narration");
  el.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}

document.getElementById("explore").addEventListener("click", () => {
  renderArtifact();
});

document.getElementById("copy-link").addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied to clipboard!");
});

function launchMiniGame() {
  const gameOverlay = document.createElement("div");
  gameOverlay.id = "popup-game";
  gameOverlay.innerHTML = `
    <style>
      #popup-game {
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: black; z-index: 9999; color: lime;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        font-family: monospace;
      }
      .popup-window {
        width: 200px; height: 100px;
        background: #333; color: white;
        border: 2px solid lime; padding: 10px;
        position: absolute;
        cursor: pointer;
      }
      #scoreboard { font-size: 1.2rem; margin-top: 1rem; }
    </style>
    <h1>🪟 Pop-Up Escape!</h1>
    <p>Close as many pop-ups as you can in 30 seconds!</p>
    <div id="scoreboard">Score: 0</div>
    <audio id="click-sound" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_3e4bcf60d6.mp3?filename=click-124467.mp3" preload="auto"></audio>
  `;
  document.body.appendChild(gameOverlay);

  const sound = document.getElementById("click-sound");
  let score = 0;
  const scoreboard = document.getElementById("scoreboard");
  const endTime = Date.now() + 30000;

  const spawnPopup = () => {
    if (Date.now() > endTime) {
      gameOverlay.innerHTML += `<h2>Time's up! Score: ${score}</h2>`;
      if (score >= 10) {
        gameOverlay.innerHTML += `<p>You unlocked: 🎁 Hidden Y2K Archive</p>`;
        unusedArtifacts.unshift(allArtifacts.find(a => a.title.includes("Hidden Y2K")));
      }
      gameOverlay.innerHTML += `<button onclick="location.reload()">Reload Site</button>`;
      return;
    }
    const popup = document.createElement("div");
    popup.className = "popup-window";
    popup.textContent = "Close Me!";
    popup.style.top = `${Math.random() * 80 + 10}%`;
    popup.style.left = `${Math.random() * 80 + 10}%`;
    popup.addEventListener("click", () => {
      popup.remove();
      score++;
      sound.currentTime = 0;
      sound.play();
      scoreboard.textContent = `Score: ${score}`;
    });
    gameOverlay.appendChild(popup);
    setTimeout(spawnPopup, Math.random() * 700);
  };

  spawnPopup();
}

// Initial render
renderArtifact();
showNarration();
setInterval(showNarration, 10000);

