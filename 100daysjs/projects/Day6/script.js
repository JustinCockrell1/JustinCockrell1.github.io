const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", conutVowels);

function conutVowels() {
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();
    
    for(let i = 0; i < wordVal.length; i++){
        let letter = wordVal.at(i);
        //if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u')
        //vowelCount++;

        //Interesting way to create a list
        if(letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}
