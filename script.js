

window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const header =document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
}

document.getElementById("date").textContent = new Date().getFullYear();