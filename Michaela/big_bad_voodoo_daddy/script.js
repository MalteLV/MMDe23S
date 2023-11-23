var playImage = document.getElementById("play");
var myAudio = document.getElementById("myAudio");

playImage.addEventListener(
  "click",
  function () {
    toggleAudio();
  },
  false
);
function toggleAudio() {
  if (myAudio.paused) {
    myAudio.play();
    playImage.classList.add("playing");
  } else {
    myAudio.pause();
    myAudio.currentTime = 0;
    playImage.classList.remove("playing");
  }
}
var isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

if (!isTouchDevice) {
  // Desktop version: Hover on image to play
  playImage.addEventListener(
    "mouseenter",
    function () {
      toggleAudio();
    },
    false
  );

  // Stop playing when leaving the image
  playImage.addEventListener(
    "mouseleave",
    function () {
      myAudio.pause();
      myAudio.currentTime = 0;
      playImage.classList.remove("playing");
    },
    false
  );
}
