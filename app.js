const container = document.querySelector(".paper-container");
const bgMusic = document.getElementById("bgMusic");

const colors = [
  "#ff4d6d",
  "#ffd166",
  "#06d6a0",
  "#118ab2",
  "#8338ec",
  "#ff9f1c",
  "#f72585",
  "#4cc9f0",
  "#4d8eff",
  "#ff4df3"
];

function createPaper() {
  const paper = document.createElement("div");
  paper.classList.add("paper");

  // Random horizontal starting position
  const startX = Math.random() * 100;

  // Random horizontal movement
  const wind = 50 + Math.random() * 180;

  // Random size
  const width = 7 + Math.random() * 9;
  const height = 10 + Math.random() * 15;

  // Random rotation
  const rotation = Math.random() * 360;

  paper.style.left = `${startX}%`;
  paper.style.width = `${width}px`;
  paper.style.height = `${height}px`;

  paper.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  paper.style.setProperty(
    "--wind",
    `${Math.random() > 0.5 ? wind : -wind}px`
  );

  paper.style.setProperty(
    "--rotation",
    `${rotation}deg`
  );

  paper.style.setProperty(
    "--duration",
    `${4 + Math.random() * 4}s`
  );

  paper.style.setProperty(
    "--delay",
    `${Math.random() * 0.2}s`
  );

  // Random shape
  paper.style.borderRadius =
    Math.random() > 0.5 ? "2px" : "50% 10% 50% 10%";

  container.appendChild(paper);

  // Remove after animation
  setTimeout(() => {
    paper.remove();
  }, 8500);
}


// First beautiful wave
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    createPaper();
  }, Math.random() * 1200);
}


// Second wave
setTimeout(() => {
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      createPaper();
    }, Math.random() * 1200);
  }
}, 1500);


// Keep making small amounts of confetti
setInterval(() => {
  for (let i = 0; i < 4; i++) {
    createPaper();
  }
}, 900);


// ===============================
// MUSIC
// ===============================

function startMusic() {
  if (!bgMusic) return;

  bgMusic.volume = 0.45;

  bgMusic.play()
    .then(() => {
      console.log("Music started");
    })
    .catch((error) => {
      console.log("Music waiting for interaction:", error);
    });

  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });
