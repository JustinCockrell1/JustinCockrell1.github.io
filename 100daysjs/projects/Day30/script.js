const empty = "",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
number = "0123456789",
symbol = "!@#$%^&*()_+-=";

const pLength = document.getElementById("p-length"),
upperCase = document.getElementById("p-uppercase"),
lowerCase = document.getElementById("p-lowercase"),
pNumber = document.getElementById("p-number"),
pSymbol = document.getElementById("p-symbol"),
submit = document.getElementById("submit"),
password = document.getElementById("password"),
copy = document.getElementById("copy");

submit.addEventListener("click", ()=> {
    let initialPassword = empty;
    // ADD CHARACTER IF OPTION IS CHECKED
    upperCase.checked ? (initialPassword+=uCase) : "";
    lowerCase.checked ? (initialPassword+=lCase) : "";
    pNumber.checked ? (initialPassword+=number) : "";
    pSymbol.checked ? (initialPassword+=symbol) : "";

    password.value = generatePassword(pLength.value, initialPassword);

});

function generatePassword(l,initialPassword){
    let pass = empty;
    for(let i = 0; i < l; i++){
        let index = Math.floor(Math.random()*initialPassword.length);
        pass+=initialPassword.charAt(index)
    }
    return pass;
}

copy.addEventListener("click",()=>{
    if(password.value==empty) {
        alert("Please generate a password")
    }
    else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied");
    }
});