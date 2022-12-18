var video = document.getElementById("playVideo");

// Get the button
var btn = document.getElementById("homePageBtn");

// Pause and play the video, and change the button text
function pauseVideo() {
  if (btn.innerHTML == "Play") {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
