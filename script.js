let progress = document.getElementById("progress");
let song = new Audio('media/The Weeknd   Is There Someone Else (Audio.mp3');
let ctrlIcon = document.getElementById("ctrlIcon");
var img = document.getElementById("image");
let Artist = document.getElementById("Artist");
let Title = document.getElementById("Title")

song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause(){
  if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
  else{
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

if(song.play){
  setInterval(()=>{
    progress.value = song.currentTime;
  },500);
}

progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

function nextsong(){ 
  img.src = 'media/Ye.jpg'
  Artist.innerHTML = "Kanye West";
  Title.innerHTML = "I Wonder";
  song.src('media/I Wonder.mp3')
  }
function previoussong(){
  img.src = 'media/Theweeknd.jpg'
  Artist.innerHTML = "The Weeknd";
  Title.innerHTML = "Is There Someone Else?";
  song.src('media/The Weeknd   Is There Someone Else (Audio.mp3')
}