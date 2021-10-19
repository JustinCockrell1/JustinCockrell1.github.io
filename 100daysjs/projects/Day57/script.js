let state,
password = document.getElementById("password"),
passwordStrength = document.getElementById("password-strength"),
lowUpperCase = document.querySelector(".low-upper-case i"),
number = document.querySelector(".number i"),
specialChar = document.querySelector(".special-char i"),
eightChar = document.querySelector(".eight-char i"),
showPassword = document.querySelector(".show-pass"),
eyeIcon = document.querySelector("#eye");


showPassword.addEventListener("click",toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup",()=>{
    let pass = password.value;
    checkStrength(pass);
});


// Toggle password visibility
function toggle(){
    if(state){
        password.setAttribute("type","password");
        state = false;
    }
    else {
        password.setAttribute("type","text");
        state=true;
    }
}

//Toggle icon in password field
function toggleEye(){
    eyeIcon.classList.toggle("fa-eye-slash");
}

//Check password strength
function checkStrength(pass){
    let strength = 0;

    //Check lower and uppercase
    if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength+=1;
        addCheck(lowUpperCase);
        
    }
    else {
        removeCheck(lowUpperCase);
    }
    //Check for numbers
    if(pass.match(/([0-9])/)){
        strength+=1;
        addCheck(number);
    }
    else {
        removeCheck(number);
    }
    //Check for special char
    if(pass.match(/([!,@,#,$,%,^,&,*,(,_,~)])/)){
        strength+=1;
        addCheck(specialChar);
    }
    else {
        removeCheck(specialChar);
    }
    //Check if password length is 8 or above
    if(pass.length>=8){
        strength+=1;
        addCheck(eightChar);
    }
    else {
        removeCheck(eightChar)
    }

    //Update progress bar
    passwordStrength.classList.remove("pb-danger","pb-warning","pb-primary","pb-success");
    if(strength==1){
    passwordStrength.classList.add("pb-danger");
    passwordStrength.style.width="25%";
    }
    else if(strength==2){
        passwordStrength.classList.add("pb-warning");
        passwordStrength.style.width="50%";
    }
    else if(strength==3){
        passwordStrength.classList.add("pb-primary");
        passwordStrength.style.width="75%";
    }
    else if(strength==4){
        passwordStrength.classList.add("pb-success");
        passwordStrength.style.width="100%";
    }
}

//Add check icon
function addCheck(charRequired) {
    charRequired.classList.remove("fa-circle");
    charRequired.classList.add("fa-check");
}

//remove check icon
function removeCheck(charRequired) {
    charRequired.classList.remove("fa-check");
    charRequired.classList.add("fa-circle");
}
