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