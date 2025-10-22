import { myAudio } from "./script.js";

const playPauseBtn = document.querySelector("#playPauseBtn");

export function playPauseMusic(shouldPlay) {
    if (shouldPlay) {
        myAudio.play();
        playPauseBtn.setAttribute("aria-pressed", true);

    } else {
        myAudio.pause();
        playPauseBtn.setAttribute("aria-pressed", false);
    }
}
