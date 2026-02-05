const startBtn = document.getElementById("startBtn");
const card = document.getElementById("card");
const container = document.querySelector(".container");
const final = document.getElementById("final");
const noBtn = document.getElementById("noBtn");
const hearts = document.querySelector(".hearts");
const loveMusic = document.getElementById("loveMusic");

// 🔓 Browser unlock audio on first click
startBtn.addEventListener("click", () => {
  container.classList.add("hidden");
  card.classList.remove("hidden");

  loveMusic.muted = true;
  loveMusic.play().then(() => {
    loveMusic.pause();
    loveMusic.currentTime = 0;
    loveMusic.muted = false;
  });
});

function yesClick() {
  card.classList.add("hidden");
  final.classList.remove("hidden");

  loveMusic.currentTime = 0;
  loveMusic.volume = 0.7;
  loveMusic.play();
}

// 😈 NO button bhaagta rahe
noBtn.onmouseover = () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

// ❤️ hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);
