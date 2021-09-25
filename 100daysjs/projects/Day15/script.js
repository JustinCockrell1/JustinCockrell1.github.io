const api = {
    key: "85c0e995c8897ec4ddd1e9bf4c3cc551",
    base: "https://api.openweathermap.org/data/2.5/"
}
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click",getInput);


function getInput(event) {
    //in html return false prevents default
    event.preventDefault(); //this does it in js

    if(event.type=="click") {
        getData(search.value);
        console.log(search.value);
    }
}

function getData(value) {
    fetch(`${api.base}weather?q=${value}&units=metric&appid=${api.key}`)
    .then(response => {
        return response.json();
    })
    .then(displayData);
    
}

function displayData(response) {
    // console.log(response);
    if(response.cod ==="400" || response.cod==="404") {
        const error = document.querySelector(".error");
        error.textContent = "Please enter a valid city";
        search.value = "";
    }
    else {
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)}<span>ºC</span>`;
        const weather = document.querySelector(".weather");
        weather.innerText=`Weather: ${response.weather[0].main}`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}ºC / ${response.main.temp_max}`;

        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL+response.weather[0].icon + ".png";

        search.value="";
        }
}

function dateFunction(d) {
    let months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date}, ${month}, ${year}`;
} 