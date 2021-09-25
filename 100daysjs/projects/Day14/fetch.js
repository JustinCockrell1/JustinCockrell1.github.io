const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const url = "https://type.fit/api/quotes";

function getQuotes(e) {
e.preventDefault();

if(number.value.length==0) {
    return alert("Please enter a number");
}
else {
  fetch(url)
  .then(function(response){
      return response.json();
  }).then(function(data){
    //console.log(JSON.stringify(data));

    data = shuffle(data);

    let output = "";

    for(let i = 0; i < data.length; i++){
        if(i==number.value) {break;}
        let quote = data[i];
        output+=`
        <li>Quote: ${quote.text}</li>
        <li>Author: ${quote.author}</li>
        <hr>
        `;
    }

    document.querySelector(".quotes").innerHTML = output;
  });

  
}
}

//FUNCTION to shuffle quotes

function shuffle(quotes){
    let CI = quotes.length, tempValue, randomIndex;

    //While elements exist in the array 
    while(CI > 0) {
        randomIndex = Math.floor(Math.random()*CI);
        // DECREASE CI BY 1
        CI--;
        //Swap last element with CI
        tempValue = quotes[CI];
        quotes[CI]=quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}