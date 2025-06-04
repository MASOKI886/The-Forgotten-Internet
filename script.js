const artifacts = [
  {
    title: "💾 Vampire Shrine of 1999",
    image: "images/vampire_shrine.jpg",
    caption: "Under Construction... Forever",
    year: "1999"
  },
  {
    title: "🖥️ Eternal Webring Hub",
    image: "images/webring_hub.jpg",
    caption: "Last linked in 2003",
    year: "2003"
  },
  {
    title: "🦇 Gothic Forum Archive",
    image: "images/goth_forum.jpg",
    caption: "Only 4 posts... ever",
    year: "2001"
  }
];

const phrases = [
  "Webrings once connected us.",
  "Nobody updated this since 2002.",
  "She left one message… then never came back.",
  "This button goes nowhere.",
  "Under Construction. Still."
];

function getRandomArtifact() {
  return artifacts[Math.floor(Math.random() * artifacts.length)];
}

function renderArtifact() {
  const container = document.getElementById("artifact-container");
  const artifact = getRandomArtifact();

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

renderArtifact();
showNarration();
setInterval(showNarration, 10000);
