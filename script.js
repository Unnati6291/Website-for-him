document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const card = document.getElementById("card");
  const container = document.querySelector(".container");
  const music = document.getElementById("loveMusic");

  startBtn.addEventListener("click", () => {
    container.style.display = "none";
    card.classList.remove("hidden");

    // music play on user click (browser rule)
    music.play().catch(err => {
      console.log("Music play error:", err);
    });
  });
});

function yesClick() {
  document.getElementById("card").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
}
