const play = document.querySelector(".play"),
previous = document.querySelector(".prev"),
next = document.querySelector(".next"),
//
trackImage = document.querySelector(".track-image"),
title = document.querySelector(".title"),
artist = document.querySelector(".artist"),
//
trackCurrentTime = document.querySelector(".current-time"),
trackDuration = document.querySelector(".duration-time"),
slider = document.querySelector(".duration-slider"),
//
showVolume = document.querySelector("#show-volume"),
volumeIcon = document.querySelector("#volume-icon"),
currentVolume = document.querySelector("#volume"),
//
autoPlayBtn = document.querySelector(".play-all"),
//
hamBurger = document.querySelector(".fa-bars"),
closeIcon = document.querySelector(".fa-times"),
//
musicPlaylist = document.querySelector(".music-playlist"),
pDiv = document.querySelector(".playlist-div"),
playlist = document.querySelector(".playlist");

let timer;
let autoplay = 0;
let indexTrack = 0;
let songIsPlaying = false;
let track = document.createElement("audio");

//All event listeners
play.addEventListener("click", justPlay);
next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);
autoPlayBtn.addEventListener("click", autoPlayToggle);
volumeIcon.addEventListener("click",muteSound);
currentVolume.addEventListener("change", changeVolume);
slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);
hamBurger.addEventListener("click",showPlayList);
closeIcon.addEventListener("click",hidePlayList);

//Load Tracks
function loadTrack(indexTrack) {
    clearInterval(timer);
    resetSlider();

    track.src = trackList[indexTrack].path;
    title.innerHTML = trackList[indexTrack].name;
    trackImage.src = trackList[indexTrack].img;
    artist.innerHTML = trackList[indexTrack].singer;
    track.load();


    timer = setInterval(updateSlider, 1000);
}



function justPlay() {
    if(songIsPlaying) pauseSong();
    else playSong();
}

//Play song
function playSong() {
    track.play();
    songIsPlaying=true;
    play.innerHTML = "<i class='fas fa-pause'></i>";
    track.volume = 0.2;
}


//pause song
function pauseSong() {
        track.pause();
        songIsPlaying=false;
        play.innerHTML = "<i class='fas fa-play'></i>";
        
}

//Next Song
function nextSong(){
    if (indexTrack < trackList.length-1) {
        indexTrack++;
    }   
    else {
        indexTrack = 0;
    }
    loadTrack(indexTrack);
    playSong();
}
//Prev Song
function prevSong(){
    if (indexTrack > 0) {
        indexTrack--;
    }   
    else {
        indexTrack = trackList.length-1;
    }
    loadTrack(indexTrack);
    playSong();
}

//Mute Sound
function muteSound() {
    track.volume = 0;
    showVolume.textContent = 0;
    currentVolume.value = 0;
}

function changeVolume() {
    track.volume = currentVolume.value/100;
    showVolume.textContent = currentVolume.value;
}

//Change duration
function changeDuration() {
    let sliderPosition = track.duration * (slider.value/100);
    track.currentTime = sliderPosition;
}

//Auto Play
function autoPlayToggle() {
    if(autoplay==0) {
        autoplay=1;
        autoPlayBtn.style.backgroundColor = "#db6400";
    }
    else {
        autoplay=0;
        autoPlayBtn.style.backgroundColor = "#ccc";
    }
}

function resetSlider() {
    slider.value = 0;
}
function updateSlider() {
    let position = 0;
    if(!isNaN(track.duration)) {
    position = (track.currentTime/track.duration)*100;
    slider.value = position;
    }

    if(track.ended){
        play.innerHTML = "<i class='fas fa-play'></i>";
        if(autoplay==1) {
            nextSong();
        }
    }
}

//Update current song time
function songTimeUpdate() {
    if(track.duration) {
    let curmins = Math.floor(track.currentTime/60);
    let cursecs = Math.floor(track.currentTime%60);
    let durmins = Math.floor(track.duration / 60)
    let dursecs = Math.floor(track.duration-durmins*60);

    if(dursecs<10) dursecs = '0'+dursecs;
    if(durmins<10) durmins = '0'+durmins;
    if(cursecs<10) cursecs = '0'+cursecs;
    if(curmins<10) curmins = '0'+curmins;

    trackCurrentTime.innerHTML = `${curmins}:${cursecs}`;
    trackDuration.innerHTML = `${durmins}:${dursecs}`;
    }
    else {

    trackCurrentTime.innerHTML ="00:00";
    trackDuration.innerHTML = "00:00";
    }
}

//Show playlist 
function showPlayList() {
    musicPlaylist.style.transform = "translateX(0)";
}

//hide playlist
function hidePlayList() {
    musicPlaylist.style.transform = "translateX(-100%)";
}

//Display tracks in playlist
let counter = 1;
function displayTracks() {
    for(let i = 0; i < trackList.length; i++) {
        let div = document.createElement("div");
        div.classList.add("playlist");
        div.innerHTML = `
        <span class="song-index">${i+1}</span>
        <p class="single-song">${trackList[i].name}</p>
        `;
        pDiv.appendChild(div);

    }
    playFromPlaylist();
}
displayTracks();

//Play from playlist
function playFromPlaylist() {
    pDiv.addEventListener("click", (e)=>{
        if(e.target.classList.contains("single-song")){
            const indexNum = trackList.findIndex((item,index)=>{
                if(item.name == e.target.innerHTML) return true;
                return false;
            });
            loadTrack(indexNum);
            playSong();
            hidePlayList();
        }
    });
}

loadTrack(0);