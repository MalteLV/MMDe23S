const hamburger = document.querySelector(".hamburger"); //div
const navMenu = document.querySelector(".menu__list"); //ul with all menu links
const navLink = document.querySelectorAll(".menu__link"); //a: all links in menu
 
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