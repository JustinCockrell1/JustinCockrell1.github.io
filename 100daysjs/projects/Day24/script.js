const links = document.querySelectorAll(".nav-list li a");

//This is easy to do in css but this is how to do it in js

for (link of links) {
    link.addEventListener("click",smoothScroll);
}

function smoothScroll(e){
    e.preventDefault();
    
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior:"smooth",
    });
    hideMenu();
}

//RESPONSIVE MOBILE MENU
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = ()=>{
    hamburger.style.display="none";
    close.style.transform="translateY(0)" //important
    menu.style.transform="translateY(0)"
}

const hideMenu = ()=>{
    hamburger.style.display="block";
    close.style.transform="translateY(-20rem)" //important
    menu.style.transform="translateY(-200%)"
}

hamburger.addEventListener("click",showMenu);
close.addEventListener("click",hideMenu);

