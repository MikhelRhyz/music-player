let myAudio = document.querySelector("#audio");
const playPauseBtn = document.querySelector("#playPauseBtn");
let isAudioOn = false;
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");

playPauseBtn.addEventListener("click", () => {
  if (!isAudioOn) {
    myAudio.play();
    isAudioOn = true;
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
    playPauseBtn.setAttribute("aria-label", "Pause");
  } else {
    myAudio.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
    isAudioOn = false;
    playPauseBtn.setAttribute("aria-label", "Play");
  }
});


myAudio.addEventListener("play", () => {
  playIcon.classList.add("hidden");
  pauseIcon.classList.remove("hidden");
  isAudioOn = true;
});

myAudio.addEventListener("pause", () => {
  playIcon.classList.remove("hidden");
  pauseIcon.classList.add("hidden");
  isAudioOn = false;
});

myAudio.addEventListener("ended", () => {
    // Reset when song ends
  playIcon.classList.remove("hidden");
  pauseIcon.classList.add("hidden");
  isAudioOn = false;
  myAudio.currentTime = 0;
});