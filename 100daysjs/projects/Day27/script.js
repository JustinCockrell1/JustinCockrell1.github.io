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
}


// Sticky Header
window.addEventListener("scroll",()=>{
    
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


//Scroll Indicator JS

window.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState = document.body.scrollTop || document.documentElement.scrollTop; //Targets safari and chrome

    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercentage = (currentState/pageHeight) * 100;

    const progressBar = document.querySelector(".progress");
    
    progressBar.style.visibility = "visible";

    progressBar.style.width = scrollPercentage + "%";
}