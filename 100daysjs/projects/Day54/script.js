const keys = document.querySelectorAll(".key")
const note = document.querySelector(".key-pressed")
// const hints = document.querySelectorAll(".key")

window.addEventListener("keydown", playNote);

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!key) return;
    

    const keyNote = key.dataset.note;

    note.innerHTML = keyNote;

 

    key.classList.add("playing")

    audio.currentTime = 0;
    audio.play();
}

//Remove playing class
keys.forEach((k)=>{
    k.addEventListener("transitionend",removeTransition);
});

function removeTransition(e) {
    if(e.propertyName!=="transform"){ // not sure what this does - it doesnrt seem necessary
        // return; - not sure why this was here
    }
    this.classList.remove("playing");
    
}