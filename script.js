import { playPauseMusic } from "./playPause.js";

export let myAudio = document.querySelector("#audio");
const playPauseBtn = document.querySelector("#playPauseBtn");
let isAudioOn = false;
const playIcon = document.querySelector("#playIcon");
const pauseIcon = document.querySelector("#pauseIcon");
const seekFill = document.querySelector("#seekFill");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const seekBar = document.querySelector("#seekBar");

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  let key = e.key === " " ? "space" : e.key;
  if (key === "space") {
    playPauseMusic(isAudioOn);
  } 
})

playPauseBtn.addEventListener("click", () => {
  playPauseMusic(isAudioOn);
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

myAudio.addEventListener("timeupdate", () => {
  const progressPercentBar = (myAudio.currentTime / myAudio.duration) * 100;
  seekFill.style.width = `${progressPercentBar}%`;

  // Update current time display
  const min = Math.floor(myAudio.currentTime / 60);
  const sec = Math.floor(myAudio.currentTime % 60).toString().padStart(2, "0");
  currentTime.textContent = `${min}:${sec}`;
});

myAudio.addEventListener("loadedmetadata", () => {
  if (isNaN(myAudio.duration)) return;  // prevent invalid duration

  const min = Math.floor(myAudio.duration / 60);
  const sec = Math.floor(myAudio.duration % 60).toString().padStart(2, "0");

  duration.textContent = `${min}:${sec}`;
});

myAudio.addEventListener("canplay", () => {
  const min = Math.floor(myAudio.duration / 60);
  const sec = Math.floor(myAudio.duration % 60).toString().padStart(2, "0");

  duration.textContent = `${min}:${sec}`;
});

seekBar.addEventListener("click", (event) => {
  const clickX = event.offsetX;
  const containerWidth = seekBar.offsetWidth;
  myAudio.currentTime = (clickX / containerWidth) * myAudio.duration;

  console.log(clickX);
  console.log(containerWidth);
  console.log(myAudio.duration);
});

