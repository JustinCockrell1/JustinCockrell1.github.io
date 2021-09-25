const btn = document.querySelector(".btn"),
tip = document.querySelector(".tip"),
total = document.querySelector(".total"),
error = document.querySelector(".error");

const hideError = () => {
    setTimeout(()=>{
        error.style.display="none";
    },5000);
}

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if(bill==="" || rate===""){
        error.innerHTML="Please enter bill and rate service.";
        error.style.display="block";
        hideError();
    }
    else if (isNaN(bill)){
        error.innerHTML="Please enter a number";
         error.style.display="block";
        hideError();
    }
    else {
        let tipAmt = bill*rate;
        tipAmt = Math.ceil(tipAmt);
        tip.innerHTML = `Tip: $${tipAmt}`;
        let totalBill = Number(bill)+tipAmt;
        total.innerHTML = `Total: $${totalBill}`;
    }

  
}

btn.addEventListener("click", calculateTip);