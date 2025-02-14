document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("loveSong");
    let playPauseBtn = document.getElementById("playPauseBtn");
    let volumeSlider = document.getElementById("volumeSlider");

    // Ensure the latest version of the audio file loads
    audio.src = "iyok.ogg?v=" + new Date().getTime();

    // Try playing the audio (will fail if autoplay is blocked)
    audio.play().catch(() => {
        console.log("Autoplay blocked. User interaction needed.");
    });

    // Play/Pause button logic
    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "💖 Pause";
        } else {
            audio.pause();
            playPauseBtn.textContent = "❤️ Play";
        }
    });

    // Volume control
    volumeSlider.addEventListener("input", function () {
        audio.volume = volumeSlider.value;
    });
});

/* Function to open the card */
function openCard() {
    document.querySelector(".card").classList.add("open");
    document.getElementById("loveSong").play();
}

/* Function to close the card */
function closeCard() {
    document.querySelector(".card").classList.remove("open");
    document.getElementById("loveSong").pause();
}

/* Floating Hearts Effect */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".hearts-container").appendChild(heart);

    let randomX = Math.random() * 100;  // Random horizontal position
    let randomDuration = 3 + Math.random() * 3; // Random float duration

    heart.style.left = randomX + "vw";
    heart.style.animationDuration = randomDuration + "s";

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, randomDuration * 1000);
}

// Generate floating hearts every 500ms
setInterval(createHeart, 500);