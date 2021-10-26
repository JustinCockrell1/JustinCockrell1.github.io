const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(speechRecognition) {
    console.log("Speech recognition supported");

    const recognition = new speechRecognition();
    recognition.continuous = true; //Makes it so it keeps listening
    micBtn.addEventListener("click",micBtnClicked);
    function micBtnClicked(e) {
        e.preventDefault();
        if(micBtn.classList.contains("fa-microphone")) {
            recognition.start();
        } else {
            recognition.stop();
        }
    }
    //Start speech recognition
    recognition.addEventListener("start",()=>{
        micBtn.classList.remove("fa-microphone");
        micBtn.classList.add("fa-microphone-slash")
        instruction.textContent="Recording...";
        searchInput.focus();
        console.log("Speech Recognition Enabled");
    });

    //Stop speech recognition
    recognition.addEventListener("end",()=>{
        micBtn.classList.remove("fa-microphone-slash");
        micBtn.classList.add("fa-microphone")
        instruction.textContent="Click the mic icon to start";
        instruction.focus();
        console.log("Speech Recognition Disabled");
    });

    // recognition.onstart = function(){

    // }

    //Get result of speech recognition
    
    let content = "";
    recognition.addEventListener("result", (e)=>{
        console.log(e);
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        content += transcript;
        searchInput.textContent=content;
        searchInput.focus();
    });
    // recognition.onresult = function(e) {
    //     console.log(e);
    // }

}
else {
    console.log("Speech recognition not supported"); 
    //Hide the microphone if it isnt supported
    speechBtnDiv.style.visibility="hidden";
}











