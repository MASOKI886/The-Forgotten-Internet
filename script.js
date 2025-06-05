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
    image: "images/webring_hub.webp",
    caption: "Three members. One match recorded.",
    year: "2001"
  },
  {
    title: "📟 ASCII Shrine",
    image: "images/goth_forum.webp",
    caption: "All text. All strange. Still hosted.",
    year: "1997"
  },
  {
    title: "🧛‍♀️ The Crimson Blog",
    image: "images/vampire_shrine.webp",
    caption: "Her last entry ends mid-sentence...",
    year: "1999"
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

  // Easter egg logic
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

  // Rare glitch artifact logic
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

// Initial render
renderArtifact();
showNarration();
setInterval(showNarration, 10000);

