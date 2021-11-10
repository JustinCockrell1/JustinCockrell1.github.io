const username = document.querySelector("#username");
const dob = document.querySelector("#dob");
const btn = document.querySelector(".btn");
const showName = document.querySelector(".u-name");
// const months = document.querySelector(".age-month");
const months = [31,28,31,30,31,30,31,31,30,31,30,31];

btn.addEventListener("click",calculateAge);

function calculateAge(e) {
    e.preventDefault();
    let today = new Date();

    let dobInput = new Date(dob.value);
    let birthMonth,birthDate,birthYear;

    let birthDetails = {
        date:dobInput.getDate(),
        month: dobInput.getMonth() + 1,
        year: Number(dobInput.getFullYear())
    };
    let currentYear = Number(today.getFullYear());
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    //Check for a date in the future
    if(
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
        ) {
            alert("invalid date");
            return;
    }

    console.log(currentYear);
    console.log(birthDetails.year);

    birthYear = currentYear - birthDetails.year;
    console.log(birthYear);
    
    if(currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    }
    else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate>=birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    }
    else {
        birthMonth--;
        let days = months[currentMonth-2];
        birthDate = days+currentDate - birthDetails.date;

        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthDate, birthMonth, birthYear);


    function displayResult(date,month,year) {
        showName.textContent = username.value;
        document.querySelector(".age-year").textContent = `${year} Years`;
        document.querySelector(".age-month").textContent = `${month} Months`;
        document.querySelector(".age-day").textContent = `${date} Days`;
    }
    
}

