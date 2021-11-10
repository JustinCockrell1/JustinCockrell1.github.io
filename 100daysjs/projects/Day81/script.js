const imgLarge = document.querySelector("#large-image");
const productImages = document.querySelectorAll(".img-small img");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const smallImage = document.querySelector(".img-small")

productImages.forEach((img)=>{
    img.addEventListener("click",(e)=>{
        let src = e.target.getAttribute("src");
        imgLarge.setAttribute("src", src);

        // imgLarge.setAttribute("src", img.getAttribute("src")); -my way of doing it
    })
})

leftBtn.addEventListener("click",()=>{
smallImage.scrollBy(-20,0);
});
rightBtn.addEventListener("click",()=>{
    smallImage.scrollBy(20,0);
});