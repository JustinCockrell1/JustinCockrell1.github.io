const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");
const searchElement = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

searchIcon.addEventListener("click",()=>{
    searchIcon.style.transform = "translateY(200%)";
    closeIcon.style.transform = "translateY(0%)";
    showSearchEl();
   
});

closeIcon.addEventListener("click",()=>{
    closeIcon.style.transform = "translateY(-200%)";
    searchIcon.style.transform = "translateY(0%)";
    hideSearchEl();
});

function showSearchEl() {
    searchElement.style.transform = "translateX(0%)"
    setTimeout(()=>{
        searchElement.style.width="30rem";
    },1000);
    setTimeout(()=>{
        searchInput.setAttribute("placeholder","Search...");
    },2000);
}

function hideSearchEl() {
    searchInput.setAttribute("placeholder","");
    searchElement.style.width="4.5rem";
    setTimeout(()=>{
        searchElement.style.transform = "translateX(200%)"
    },1000);
    
}