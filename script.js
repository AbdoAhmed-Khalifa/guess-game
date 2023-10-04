"use strict"
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;
const displayMessege = function (message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click",
  function () {
    const guess = Number(document.querySelector(".guess").value)
    if (!guess) {
      displayMessege("No Number")
    } else if (guess === secretNumber) {
      displayMessege('Correct Number')
      document.querySelector("body").style.backgroundColor = "#60b347"
      document.querySelector(".number").style.width = "30rem"
      document.querySelector(".number").textContent = secretNumber;
      if (score > HighScore) {
        HighScore = score;
        document.querySelector(".highscore").textContent = HighScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessege(guess > secretNumber ? `Too High` : 'Too Low')
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessege('You Lost the Game')
        document.querySelector(".score").textContent = 0;
      }
    }
  })
document.querySelector(".again").addEventListener("click",
  function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    displayMessege('Start guessing..')
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
  })