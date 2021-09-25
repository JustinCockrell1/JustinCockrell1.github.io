//Variables
const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
    bgColor.classList.add("online");
}

async function connectionStatus(){
    try {
        const fetchResults = await fetch("https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png?time="+(new Date().getTime()));
        image.src = "images/online.png";
        setColor();
        return fetchResults.status >=200 && fetchResults.status <300;
    }
    catch (error){
        console.log(error);
        statusDisplay.textContent="OOPS Your internet connection is down";
        image.src="images/offline";
        bgColor.classList.remove("online");
    }
}

//MONITOR THE CONNECTION
setInterval(async ()=>{
    const result = await connectionStatus();
    if(result){
        statusDisplay.textContent="You are online, connection looks good.";
        setColor();
    }
},10000);

//Check connection when page loads

window.addEventListener("load", async (event)=> {
    if(connectionStatus()){
        statusDisplay.textContent="You are online, connection looks good.";
    }
    else {
        statusDisplay.textContent="You are OFFLINE";
    }
});