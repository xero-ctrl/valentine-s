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
    audio.src = "iyok.ogg?v=" + new Date().getTime();
};
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("loveSong");

    // Try to play the audio
    audio.play().catch(error => {
        console.log("Autoplay blocked. User interaction needed.");
    });

    // Add a button to manually start audio
    let playButton = document.createElement("button");
    playButton.textContent = "Play Music";
    playButton.style.position = "fixed";
    playButton.style.top = "10px";
    playButton.style.left = "10px";
    document.body.appendChild(playButton);

    playButton.addEventListener("click", function () {
        audio.play();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("loveSong");
    let playPauseBtn = document.getElementById("playPauseBtn");
    let volumeSlider = document.getElementById("volumeSlider");

    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "💖 Pause";
        } else {
            audio.pause();
            playPauseBtn.textContent = "❤️ Play";
        }
    });

    volumeSlider.addEventListener("input", function () {
        audio.volume = volumeSlider.value;
    });
});