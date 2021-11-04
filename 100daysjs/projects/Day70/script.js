const main = document.querySelector(".main");
const alertBox = document.querySelector(".alert");
const exclamationIcon = document.querySelector(".fa-exclamation-circle");
const msg = document.querySelector(".msg");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".fa-times");

//Show alert class

class ShowAlert{
    constructor(state, borderColor, color) {
        this.state = state;
        this.borderColor = borderColor;
        this.color=color;
    }

    trigger(message) {
        
        alertBox.style.background = this.state;
        alertBox.style.borderColor = this.borderColor;
        msg.textContent = message;
        msg.style.color = this.color;
        exclamationIcon.style.color=this.color;
        closeIcon.style.color=this.color;

        alertBox.classList.add("show");
        alertBox.classList.remove("hide");

        setTimeout(()=>{
            alertBox.classList.add("hide");
            alertBox.classList.remove("show");
        }, 5000);
    

    }
}

const warning = new ShowAlert("#ffdb9b", "#ffa502", "#ce8500");
const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24"); 

closeBtn.addEventListener("click",()=>{
    alertBox.classList.add("hide");
    alertBox.classList.remove("show");
})

main.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-danger")){
        danger.trigger("This is a danger message");
    }
    else if(e.target.classList.contains("btn-warning")){
        warning.trigger("This is a warning message");
    }
});