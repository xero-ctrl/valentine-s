function openCard() {
    document.querySelector(".card").classList.add("open");
    document.getElementById("loveSong").play();
}

function closeCard() {
    document.querySelector(".card").classList.remove("open");
    document.getElementById("loveSong").pause();
}

/* Floating Hearts Effect */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".hearts-container").appendChild(heart);

    let randomX = Math.random() * 100;
    let randomDuration = 3 + Math.random() * 3;

    heart.style.left = randomX + "vw";
    heart.style.animationDuration = randomDuration + "s";

    setTimeout(() => {
        heart.remove();
    }, randomDuration * 1000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);
window.onload = function () {
    let audio = document.getElementById("loveSong");
    audio.src = "iyok.mp3?v=" + new Date().getTime();
};