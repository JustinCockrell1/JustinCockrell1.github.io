const wordArray = ["Web Developer","Product Designer", "Tech Advocate"];
const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 50;
const newWordDelay = 2000;

//Type Word
function type(){
    
    if(letterIndex < wordArray[wordArrayIndex].length){
        
        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        }

        typedWord.textContent+=wordArray[wordArrayIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type,typingDelay);
    }
    else {
        cursor.classList.remove("typing");
        setTimeout(erase,newWordDelay);
    }
}

//Erase Word
function erase(){
    if(letterIndex > 0) {

        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        }

        typedWord.textContent = wordArray[wordArrayIndex].substring(0,letterIndex-1);
        letterIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursor.classList.remove("typing");
        wordArrayIndex++;
        if(wordArrayIndex>=wordArray.length) wordArrayIndex=0;
        setTimeout(type,typingDelay);


    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(type, newWordDelay)
});

// wordArray.forEach((word,index)=>{
// console.log(`${index} ${word}`);
// });

// const word = "Developer";
// const result = word.charAt(0)
// console.log(result);

// const word = "Developer";
// const result = word.substring(1,4);
// console.log(result);

//Preloader JS
const preloader = document.querySelector(".preloader");

window.addEventListener('load', ()=>{
    preloader.style.display = "none";
});