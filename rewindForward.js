import { myAudio } from "./script.js";

export function rewind(){
  myAudio.currentTime -= 10;
}

export function forward(){
  myAudio.currentTime += 10;
}