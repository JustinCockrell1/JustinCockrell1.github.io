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
        instruction.textContent="Recording... Press Ctrl + m to stop";
        searchInput.focus();
        console.log("Speech Recognition Enabled");
    });

    //Stop speech recognition
    recognition.addEventListener("end",()=>{
        micBtn.classList.remove("fa-microphone-slash");
        micBtn.classList.add("fa-microphone")
        instruction.textContent="Press Ctrl + x or Click the Mic icon to start";
        instruction.focus();
        console.log("Speech Recognition Disabled");
    });

    // recognition.onstart = function()

    //Get result of speech recognition
    
    // let content = "";
    recognition.addEventListener("result", (e)=>{
        console.log(e);
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;

        if(transcript.toLowerCase().trim() === "stop recording")
        {
            recognition.stop();
        }
        else if(!searchInput.value) {
            searchInput.value=transcript;
        }
        else {
            if(transcript.toLowerCase().trim()==="search") {
                searchForm.submit();
            }
            else if(transcript.toLowerCase().trim()==="reset form") {
                searchInput.value = "";
            } else {
                searchInput.value=transcript;
            }
        }



    });

    //Add keyboard Event Listener
    document.addEventListener("keydown",(e)=>{
        e.preventDefault();
        if(e.ctrlKey && e.key==='x'){ //e.shiftKey
            recognition.start();
        }
        if(e.ctrlKey && e.key==='m'){ //e.shiftKey
            recognition.stop();
        }
    })

}
else {
    console.log("Speech recognition not supported"); 
    //Hide the microphone if it isnt supported
    speechBtnDiv.style.visibility="hidden";
}