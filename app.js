const container = document.querySelector(".paper-container");

const colors = [
    "#ff4d6d",
    "#ffd166",
    "#06d6a0",
    "#118ab2",
    "#8338ec",
    "#ff9f1c",
    "#f72585",
    "#4cc9f0",
    #4d8eff,
    #ff4df3
];

function createPaper() {
    const paper = document.createElement("div");

    paper.classList.add("paper");

    const startX = Math.random() * 100;
    const wind = 40 + Math.random() * 180;

    paper.style.left = `${startX}%`;

    paper.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    paper.style.width =
        `${6 + Math.random() * 10}px`;

    paper.style.height =
        `${10 + Math.random() * 16}px`;

    paper.style.setProperty(
        "--start-x",
        `${(Math.random() - 0.5) * 40}px`
    );

    paper.style.setProperty(
        "--wind",
        `${Math.random() > 0.5 ? wind : -wind}px`
    );

    paper.style.setProperty(
        "--duration",
        `${3 + Math.random() * 4}s`
    );

    paper.style.setProperty(
        "--spin",
        `${1 + Math.random() * 2}s`
    );

    paper.style.animationDelay =
        `${Math.random() * 0.5}s`;

    container.appendChild(paper);

    setTimeout(() => {
        paper.remove();
    }, 800);
}


// First BIG wave
for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        createPaper();
    }, Math.random() * 1200);
}


// Second wave
setTimeout(() => {
    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            createPaper();
        }, Math.random() * 1000);
    }
}, 1500);




document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
