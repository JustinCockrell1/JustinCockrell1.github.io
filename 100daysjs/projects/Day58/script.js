const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const close =document.querySelector(".close");

const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");

register.addEventListener("click",(e)=>{
    loginSection.style.display="none";
    registerSection.style.display="flex";
});


login.addEventListener("click",(e)=>{
    loginSection.style.display="flex";
    registerSection.style.display="none";
});

forgot.addEventListener("click",(e)=>{
    loginSection.style.display="none";
    forgotSection.style.display="flex";
});

close.addEventListener("click",(e)=>{
    loginSection.style.display="flex";
    forgotSection.style.display="none";
});