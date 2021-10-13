const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        //const filter = e.target.getAttribute("data-link"); - 2 ways to do it
        const filter = e.target.dataset.link;
        if(filter ==="home"){
            text.textContent="Home Page";
        }
        else if(filter ==="about"){
            text.textContent="About Page";
        }
        else if(filter ==="contact"){
            text.textContent="Contact Page";
        }
    });
});
