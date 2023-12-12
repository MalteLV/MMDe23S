// script.js
const playButton = document.getElementById("playButton");
const gifImage = playButton.querySelector("img");
const audioPlayer = document.getElementById("audioPlayer");

playButton.addEventListener("mouseenter", () => {
  // Start the GIF animation on hover
  gifImage.src = "images/Gif-move.gif";

  // Set the volume and play the music
  audioPlayer.volume = 0.5; // Adjust the volume as needed
  audioPlayer.play();
});

playButton.addEventListener("mouseleave", () => {
  // Reset the GIF animation and stop the music when not hovered
  gifImage.src = "images/Gif-static.png";
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});
