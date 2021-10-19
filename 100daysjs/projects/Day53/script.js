const counters = document.querySelectorAll(".counter");


function updateCounters() {
counters.forEach((counter)=>{
    let current = +counter.innerText;
    let target = counter.dataset.target;
    let step = target/200;
    function update() {
        
        console.log(target);
        console.log(current);
        if(target > current){
            current+=step;
        counter.innerHTML=Math.round(current);
        setTimeout(update, 10);
        }
        else {
            counter.innerHTML = Math.round(target);
        }

    }

    update();
   
});
}

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const sectionTop = document.querySelector(".top");
    const sectionTopHeight = sectionTop.clientHeight;
    // console.log(sectionTopHeight);
    if (scrollHeight >= sectionTopHeight - 1) {
      updateCounters();
    }
  });