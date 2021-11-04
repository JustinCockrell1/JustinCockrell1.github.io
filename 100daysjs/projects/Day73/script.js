const rangeSlider = document.querySelector(".circle-range");
const value = document.querySelector(".value");

value.textContent = rangeSlider.value;

// rangeSlider.addEventListener("input", ()=>{
// value.innerHTML = rangeSlider.value;
// })

rangeSlider.oninput = function () {
    value.textContent = this.value;
}