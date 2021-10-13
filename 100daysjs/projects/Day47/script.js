const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const autoScroll = true;
let slideInterval;
let intervalTime = 3000;


const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add("current");
    }
    else {
        slides[0].classList.add("current");
    }
    //current.classList.remove("current");
}

const previousSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add("current");
    }
    else {
        slides[slides.length-1].classList.add("current");
    }
   // current.classList.remove("current");
}


//Add Event Listeners
next.addEventListener("click",()=>{
    nextSlide()
    if(autoScroll){
        clearInterval(slideInterval);
        auto();
    }
    
});

prev.addEventListener("click",()=>{
    previousSlide()
    if(autoScroll){
        clearInterval(slideInterval);
        auto();
    }
});

//Auto scroll

    function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
    }

if(autoScroll) {
auto();
}