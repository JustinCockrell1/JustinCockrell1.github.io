const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];

btn.addEventListener("click",openPopup);

// close.addEventListener("click", closePopup);

//open popup
function openPopup(e){
    e.preventDefault();
    //console.log(input.value);
    modal.style.display = "block";

    startCountdown(e);




}


function closePopup(){
    // e.preventDefault();
    //console.log(input.value);
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target==modal){
        closePopup();
    }
}

//COUNTER FUNCTION
let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");

function startCountdown() {
    reverseCounter = 10;
    let downloadTimer = setInterval(()=>{
        progressBar.value = 10 - (--reverseCounter);
        if(reverseCounter <= -1) {
            clearInterval(downloadTimer);
            closePopup();
            window.open(input.value, "_blank");
        }
        counting.innerHTML = reverseCounter;
    },1000);
    
}