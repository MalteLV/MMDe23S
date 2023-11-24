// Get the button and snowglobe image by class name
var animateButton = document.querySelector(".animateButton");
var snowglobeImage = document.querySelector(".christmas__snowglobe");

// Add click event listener to the button
animateButton.addEventListener("click", function () {
  // Add the 'animate__shakeX' class to the snowglobe image
  snowglobeImage.classList.add("animate__shakeX");

  // After a short delay, remove the 'animate__shakeX' class to reset the animation
  setTimeout(function () {
    snowglobeImage.classList.remove("animate__shakeX");
  }, 1000); // Adjust the delay (in milliseconds) as needed
});

function toggleSection() {
    var section = document.querySelector(".snow");
    if (section.style.display === "none" || window.getComputedStyle(section).display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}