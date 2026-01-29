const song = document.getElementById("song");
const lyricsDiv = document.getElementById("lyrics");
const slideshow = document.getElementById("slideshow");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let currentImg = img1;
let nextImg = img2;

const lyrics = [
  "You’ve always been stronger than you know",
  "From childhood laughter to silent support",
  "You made life warmer just by being there",
  "This song is small, but my gratitude isn’t",
  "Happy Birthday ❤️"
];

let images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
  "images/pic6.jpg",
  "images/pic7.jpg",
  "images/pic8.jpg",
  "images/pic9.jpg",
  "images/pic10.jpg",
  "images/pic11.jpg",
  "images/pic12.jpg",
  "images/pic13.jpg",
  "images/pic14.jpg",
  "images/pic15.jpg",
  "images/pic16.jpg"
];

let lyricIndex = 0;
let imageIndex = 0;
let lyricInterval = null;
let imageInterval = null;
let started = false;

/* 🔀 Shuffle */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ▶ Play — ONLY triggers audio */
function playSong() {
  if (started) {
    song.play();
    return;
  }

  started = true;
  song.play();

  song.onplay = () => {
    slideshow.classList.remove("hidden");
    shuffleArray(images);
    startImages();
    startLyrics();
  };
}

/* ⏸ Pause */
function pauseSong() {
  song.pause();
}

/* 🔁 Replay */
function replaySong() {
  song.pause();
  song.currentTime = 0;

  lyricIndex = 0;
  imageIndex = 0;

  clearInterval(lyricInterval);
  clearInterval(imageInterval);
  lyricInterval = null;
  imageInterval = null;

  lyricsDiv.innerHTML = "";
  lyricsDiv.style.opacity = 0;

  img1.classList.remove("active");
  img2.classList.remove("active");

  shuffleArray(images);
  song.play();
}

/* 🎶 Lyrics */
function startLyrics() {
  lyricsDiv.innerText = lyrics[lyricIndex];
  lyricsDiv.style.opacity = 1;

  lyricInterval = setInterval(() => {
    lyricIndex++;

    if (lyricIndex >= lyrics.length) {
      clearInterval(lyricInterval);
      showFinalLetter();
      return;
    }

    lyricsDiv.style.opacity = 0;

    setTimeout(() => {
      lyricsDiv.innerText = lyrics[lyricIndex];
      lyricsDiv.style.opacity = 1;
    }, 2000);

  }, 5500);
}

/* 🎞️ Crossfade slideshow */
function startImages() {
  currentImg.src = images[imageIndex];
  currentImg.classList.add("active");

  imageInterval = setInterval(() => {
    imageIndex = (imageIndex + 1) % images.length;

    nextImg.src = images[imageIndex];
    nextImg.classList.add("active");
    currentImg.classList.remove("active");

    [currentImg, nextImg] = [nextImg, currentImg];

  }, 5500);
}

/* 💌 Final letter */
function showFinalLetter() {
  setTimeout(() => {
    lyricsDiv.style.opacity = 0;

    setTimeout(() => {
      lyricsDiv.innerHTML = `
        <p>Dear Sister,</p>
        <p>Thank you for being my constant.</p>
        <p>May your life be filled with light.</p>
        <p>Happy Birthday ❤️</p>
        <p>— Your Brother</p>
      `;
      lyricsDiv.style.opacity = 1;
    }, 2000);

  }, 4000);
}

