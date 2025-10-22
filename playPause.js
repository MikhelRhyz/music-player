import { myAudio } from "./script.js";

export function playPauseMusic(isAudioOn) {
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
}