function playSong() {
  const song = document.getElementById("song");
  const message = document.getElementById("message");

  song.play();
  setTimeout(() => {
    message.classList.add("show");
  }, 2000);
}

