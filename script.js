import { playPauseMusic } from "./playPause.js";
import { rewind, forward } from "./rewindForward.js";
export let myAudio = document.querySelector("#audio");

const playPauseBtn = document.querySelector("#playPauseBtn");
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const seekFill = document.querySelector("#seekFill");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const seekBar = document.querySelector("#seekBar");
const rewindBtn = document.querySelector("#rewindBtn");
const forwardBtn = document.querySelector("#forwardBtn");

let isAudioOn = false;

// 🟢 PLAY/PAUSE TOGGLE
playPauseBtn.addEventListener("click", () => {
  isAudioOn = !isAudioOn;
  playPauseMusic(isAudioOn);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key === " ") {
    isAudioOn = !isAudioOn;
    playPauseMusic(isAudioOn);
  } else if (e.key === "ArrowLeft") rewind();
  else if (e.key === "ArrowRight") forward();
});

// 🔵 EVENTS
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
  playIcon.classList.remove("hidden");
  pauseIcon.classList.add("hidden");
  isAudioOn = false;
  myAudio.currentTime = 0;
});

myAudio.addEventListener("timeupdate", () => {
  const progressPercentBar = (myAudio.currentTime / myAudio.duration) * 100;
  seekFill.style.width = `${progressPercentBar}%`;

  const min = Math.floor(myAudio.currentTime / 60);
  const sec = Math.floor(myAudio.currentTime % 60).toString().padStart(2, "0");
  currentTime.textContent = `${min}:${sec}`;
});

myAudio.addEventListener("loadedmetadata", () => {
  const min = Math.floor(myAudio.duration / 60);
  const sec = Math.floor(myAudio.duration % 60).toString().padStart(2, "0");
  duration.textContent = `${min}:${sec}`;
  console.log(myAudio.duration);
});

seekBar.addEventListener("click", (event) => {
  const clickX = event.offsetX;
  const containerWidth = seekBar.offsetWidth;
  myAudio.currentTime = (clickX / containerWidth) * myAudio.duration;
});

rewindBtn.addEventListener("click", rewind);
forwardBtn.addEventListener("click", forward);
