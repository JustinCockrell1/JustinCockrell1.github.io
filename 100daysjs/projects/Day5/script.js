const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
    const word = document.querySelector(".input-text").value;

    let len = word.length;

    let start = word.substring(0, Math.floor(len/2)).toLowerCase();
    let end = word.substring(len- Math.floor(len/2)).toLowerCase();

    //This is a cool way to reverse a string
    //let flip = end.split("").reverse().join("");

    //This uses a weird syntax
    let flip = [...end].reverse().join("");

    if(flip==start) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`
    }

    //alert(flip);


}