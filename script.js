const song = document.getElementById("song");
const lyricsDiv = document.getElementById("lyrics");
const slide = document.getElementById("slide");

const lyrics = [
  "You’ve always been stronger than you know",
  "From silly fights to silent support",
  "You made life warmer just by being there",
  "This song is small, but my love isn’t",
  "Happy Birthday ❤️"
];

const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
  "images/pic6.jpg",
  "images/pic7.jpg",
  "images/pic8.jpg"
];

let lyricIndex = 0;
let imageIndex = 0;

function startExperience() {
  song.play();
  showLyrics();
  showImages();
}

function showLyrics() {
  lyricsDiv.style.opacity = 1;
  lyricsDiv.innerText = lyrics[lyricIndex];

  setInterval(() => {
    lyricIndex = (lyricIndex + 1) % lyrics.length;
    lyricsDiv.style.opacity = 0;

    setTimeout(() => {
      lyricsDiv.innerText = lyrics[lyricIndex];
      lyricsDiv.style.opacity = 1;
    }, 2000);
  }, 5000);
}

function showImages() {
  slide.style.opacity = 1;

  setInterval(() => {
    imageIndex = (imageIndex + 1) % images.length;
    slide.style.opacity = 0;

    setTimeout(() => {
      slide.src = images[imageIndex];
      slide.style.opacity = 1;
    }, 2000);
  }, 5000);
}

