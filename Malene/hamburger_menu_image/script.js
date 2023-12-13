const hamburger = document.querySelector(".hamburger"); //div
const navMenu1 = document.querySelector(".navbar__menu--first"); //ul with all menu links
const navMenu2 = document.querySelector(".navbar__menu--second"); //ul with all menu links

const navLink = document.querySelectorAll(".menuItem__link"); //a: all links in menu

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() { //open and close menu in mobile
    hamburger.classList.toggle("active");
    navMenu1.classList.toggle("active");
    navMenu2.classList.toggle("active");
    //navMenu.classList.toggle("active");
}

function closeMenu() { //when a menu item (a) is clicked, the mobile menu is deactivated
    hamburger.classList.remove("active");
    navMenu1.classList.remove("active");
    navMenu2.classList.remove("active");
}