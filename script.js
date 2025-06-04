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
    image: "images/vampire_shrine.webp",
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

function getRandomUnusedArtifact() {
  if (unusedArtifacts.length === 0) {
    unusedArtifacts = [...allArtifacts];
  }
  const index = Math.floor(Math.random() * unusedArtifacts.length);
  const [artifact] = unusedArtifacts.splice(index, 1);
  return artifact;
}

function renderArtifact() {
  const artifact = getRandomUnusedArtifact();
  const container = document.getElementById("artifact-container");
  const el = document.createElement("div");
  el.className = "artifact";
  el.innerHTML = `
    <h2>${artifact.title}</h2>
    <img src="${artifact.image}" alt="${artifact.title}" />
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
