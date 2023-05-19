let audio = document.querySelector("audio");
let playButton = document.querySelector(".btn-play");
let stopButton = document.querySelector(".btn-stop");

let player = 0;

function playMusic() {
  if (player == 0) {
    player = 1;
    audio.play();
    playButton.innerHTML = "Pause &#9208;";
  } else {
    player = 0;
    audio.pause();
    playButton.innerHTML = "Play &#9658;";
  }
}

playButton.addEventListener("click", playMusic);

stopButton.addEventListener("click", () => {
  playMusic();
  audio.pause();
  audio.currentTime = 0;
  playButton.innerHTML = "Play &#9658;";
});