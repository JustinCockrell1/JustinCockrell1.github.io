const checkBox = document.querySelector("#checkbox");
const slider = document.querySelector(".slider");
const basic = document.querySelector(".basic");
const prof = document.querySelector(".prof");
const master = document.querySelector(".master");

slider.addEventListener("click", ()=>{
    if(!checkBox.checked) {
        // basic.innerHTML = "99.99";
        // prof.innerHTML = "189.99";
        // master.innerHTML = "289.99";
        [basic.textContent, prof.textContent, master.textContent] = ["99.99","189.99","289.99"];
    }
    else {
        // basic.innerHTML = "9.99";
        // prof.innerHTML = "19.99";
        // master.innerHTML = "29.99";
        [basic.textContent, prof.textContent, master.textContent] = ["9.99","19.99","29.99"];
    }
});