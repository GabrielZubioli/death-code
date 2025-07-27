document.addEventListener("DOMContentLoaded", () => {
  const musicList = [
    "audio/light_b.mp3",
    "audio/kira_a.mp3",
    "audio/light_d.mp3",
  ];

  const musicNames = ["Light B", "Kira A", "Light D"];

  let currentTrack = 0;
  let isPlaying = false;

  const bgMusic = document.getElementById("bgMusic");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const nextTrackBtn = document.getElementById("nextTrackBtn");
  const prevTrackBtn = document.getElementById("prevTrackBtn");
  const musicTitle = document.getElementById("musicTitle");

  function updateMusicTitle() {
    musicTitle.textContent = musicNames[currentTrack];
  }

  bgMusic.src = musicList[currentTrack];
  bgMusic.volume = 0.4;
  updateMusicTitle();

  playPauseBtn.addEventListener("click", () => {
    console.log("Play/Pause clicado");
    if (isPlaying) {
      bgMusic.pause();
      playPauseBtn.textContent = "▶";
    } else {
      bgMusic.play();
      playPauseBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
  });

  nextTrackBtn.addEventListener("click", () => {
    console.log("Next clicado");
    currentTrack = (currentTrack + 1) % musicList.length;
    bgMusic.src = musicList[currentTrack];
    bgMusic.load();
    updateMusicTitle();
    if (isPlaying) {
      bgMusic.play();
      playPauseBtn.textContent = "⏸";
    } else {
      playPauseBtn.textContent = "▶";
    }
  });

  prevTrackBtn.addEventListener("click", () => {
    console.log("Prev clicado");
    currentTrack = (currentTrack - 1 + musicList.length) % musicList.length;
    bgMusic.src = musicList[currentTrack];
    bgMusic.load();
    updateMusicTitle();
    if (isPlaying) {
      bgMusic.play();
      playPauseBtn.textContent = "⏸";
    } else {
      playPauseBtn.textContent = "▶";
    }
  });

  const audioControls = document.querySelector(".audio-controls");
  const flipbook = document.getElementById("flipbook");

  flipbook.addEventListener("mousedown", () => {
    audioControls.style.zIndex = "0";
  });

  $(".flipbook").bind("turned", function (event, page, view) {
    if (page === 1) {
      audioControls.style.zIndex = "1";
    }
  });
});
