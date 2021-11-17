const speechSynthesis = window.speechSynthesis;

if(speechSynthesis) {
    console.log("Speech synthesis supported");
    searchForm.addEventListener("submit",speak);
    //micBtn.addEventListener("click",speak);

    function speak(e) {
        
        e.preventDefault();
        // e.stopImmediatePropogation();
        const inputValue = input.value;
        const speech = new SpeechSynthesisUtterance();
        speech.lang="en-US";
        speech.text = inputValue;
        speech.volume = "1";
        speech.rate = "1";
        speech.pitch = "1";
        speech.voice = speechSynthesis.speak(speech);
        // speechSynthesis.getVoices() -list of voices
    }

}
else {
    console.log("Speech synthesis not supported"); 
    //Hide the microphone if it isnt supported
    speechBtnDiv.style.visibility="hidden";
}
