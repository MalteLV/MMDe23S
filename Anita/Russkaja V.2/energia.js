// script.js
const playButton = document.getElementById("playButton");
const gifImage = playButton.querySelector("img");
const audioPlayer = document.getElementById("audioPlayer");

playButton.addEventListener("mouseenter", () => {
  // Start the GIF animation on hover
  gifImage.src = "images/Energia/BoxDance.gif";

  // Set the volume and play the music
  audioPlayer.volume = 0.2; // Adjust the volume as needed
  audioPlayer.play();
});

playButton.addEventListener("mouseleave", () => {
  // Reset the GIF animation and stop the music when not hovered
  gifImage.src = "images/Energia/BoxDance.png";
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});
