const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const mobileMenu = document.querySelector(".navbar");
const navWrapper = document.querySelector(".nav-wrapper");

hamburger.addEventListener("click",showMenu);

close.addEventListener("click",hideMenu);
navWrapper.addEventListener("click",hideMenu);

function hideMenu() {
    hamburger.style.display="block";
    close.style.transform = "translateY(-200%)";
    mobileMenu.style.transform = "translateX(200%)";
    navWrapper.style.transform = "translateX(-200%)";
}

function showMenu() {
    hamburger.style.display="none";
    close.style.transform = "translateX(0)";
    mobileMenu.style.transform = "translateX(0)";
    navWrapper.style.transform = "translateX(0)";
}