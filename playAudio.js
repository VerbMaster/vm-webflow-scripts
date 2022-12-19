function playAudio(audioName) {

  var audioElement = document.getElementById(audioName);
  var shouldPlay = audioElement.paused;
 
  if (shouldPlay) {
    document.querySelectorAll('audio').forEach(el => el.pause());
    document.querySelectorAll('audio').forEach(el => el.currentTime = 0);
    audioElement.play();
 
  } else {
    audioElement.pause();
  }
 
  const audioButtons = document.getElementsByClassName('audiobutton');
  
  for (let i = 0; i < audioButtons.length; i++)
  {
    var aB = audioButtons[i]; 
    var aBSpeakImage =  aB.getElementsByClassName('speakimage')[0];
    var aBPauseImage = aB.getElementsByClassName('pauseimage')[0];
    aBSpeakImage.style.display = "block";
    aBPauseImage.style.display = "none";
  }
  
  var tappedElementId = audioName + "-Button"
  var button = document.getElementById(tappedElementId)
  var speakImage = button.getElementsByClassName('speakimage')[0];
  var pauseImage = button.getElementsByClassName('pauseimage')[0];
 
  if (shouldPlay) {
    pauseImage.style.display = "block";
    speakImage.style.display = "none";

    audioElement.addEventListener('ended', function() {
      // Audio has ended when this function is executed.
      pauseImage.style.display = "none";
      speakImage.style.display = "block";    
},false);
  } else {
      pauseImage.style.display = "none";
      speakImage.style.display = "block";    
  }
}  