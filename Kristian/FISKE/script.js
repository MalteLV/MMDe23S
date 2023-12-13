document.addEventListener("DOMContentLoaded", function () {
  const progressBarContainer = document.getElementById(
    "progress-bar-container"
  );
  const progressBar = document.getElementById("progress-bar");

  // Update progress bar on scroll
  document.addEventListener("scroll", function () {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = `${progress}%`;
  });

  // Hide progress bar when not scrolling
  let isScrolling;

  document.addEventListener("scroll", function () {
    window.clearTimeout(isScrolling);
    progressBarContainer.style.opacity = "1";

    isScrolling = setTimeout(function () {
      progressBarContainer.style.opacity = "0";
    }, 2000);
  });
});
