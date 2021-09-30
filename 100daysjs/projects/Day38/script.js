const celsius = document.querySelector(".celsius"),
fahrenheit = document.querySelector(".fahrenheit"),
kelvin = document.querySelector(".kelvin"),

form = document.querySelector("form");

form.addEventListener("input",convertWeight);

//Called event delegation because its only 1 event listener
function convertWeight(e) {
    if(e.target.classList.contains("celsius")) {
        let x = e.target.value;
        fahrenheit.value = (x*1.8+32).toFixed(2); //Makes it only have 2 decimal points
        kelvin.value=(x+273.15).toFixed(2);
        
    }
    else if(e.target.classList.contains("fahrenheit")) {
        let x = e.target.value;
        celsius.value = ((x-32)/1.8).toFixed(2);
        kelvin.value=((x-32)/1.8+273.15).toFixed(2);
     
    }
    else if(e.target.classList.contains("kelvin")) {
        let x = e.target.value;
        celsius.value = (parseFloat(x) -273.15).toFixed(2);
        fahrenheit.value=((x-273.15)*1.8+32).toFixed(2);
       
    }

}
