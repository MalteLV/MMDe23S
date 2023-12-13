const hamburger = document.querySelector(".hamburger"); //div
const navMenu = document.querySelector(".navbar__menu"); //ul with all menu links
const navLink = document.querySelectorAll(".menuItem__link"); //a: all links in menu

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  //open and close menu in mobile
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  //when a menu item (a) is clicked, the mobile menu is deactivated
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const expandableTitles = document.querySelectorAll(".expandable-title");
  const hiddenTexts = document.querySelectorAll(".hidden-text");

  expandableTitles.forEach(function (title, index) {
    title.addEventListener("click", function () {
      if (
        hiddenTexts[index].style.display === "none" ||
        hiddenTexts[index].style.display === ""
      ) {
        hiddenTexts[index].style.display = "block";
      } else {
        hiddenTexts[index].style.display = "none";
      }
    });
  });
});
