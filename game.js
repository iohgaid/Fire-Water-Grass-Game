const choices = ["Fire", "Water", "Grass"];

let score = {
  player: 0,
  computer: 0
};

let gameActive = false;
const WIN_SCORE = 5;

function startGame() {
  gameActive = true;

  document.getElementById("turn").textContent =
    "Your turn! Choose one.";

  document.getElementById("gameMessage").textContent = "";
  document.getElementById("gameMessage").className = "game-message";

  document.querySelectorAll(".choice-btn").forEach(btn => {
    btn.disabled = false;
  });
}

function restartGame() {
  score.player = 0;
  score.computer = 0;

  gameActive = true;

  document.getElementById("playerScore").textContent =
    "Player: 0";

  document.getElementById("computerScore").textContent =
    "Computer: 0";

  document.getElementById("playerChoice").textContent =
    "Player Choice: -";

  document.getElementById("computerChoice").textContent =
    "Computer Choice: -";

  document.getElementById("result").textContent =
    "Result: -";

  document.getElementById("turn").textContent =
    "Your turn! Choose one.";

  document.getElementById("gameMessage").textContent = "";
  document.getElementById("gameMessage").className = "game-message";

  document.querySelectorAll(".choice-btn").forEach(btn => {
    btn.disabled = false;
  });
}

function playGame(playerChoice) {

  if (!gameActive) return;

  const randomIndex =
    Math.floor(Math.random() * choices.length);

  const computerChoice =
    choices[randomIndex];

  let result = "";

  if (playerChoice === computerChoice) {

    result = "🤝 It's a Tie!";

  } else if (
    (playerChoice === "Fire" && computerChoice === "Grass") ||
    (playerChoice === "Water" && computerChoice === "Fire") ||
    (playerChoice === "Grass" && computerChoice === "Water")
  ) {

    result = "🎉 You Win!";
    score.player++;

  } else {

    result = "💻 Computer Wins!";
    score.computer++;
  }

  document.getElementById("playerChoice").textContent =
    `Player Choice: ${playerChoice}`;

  document.getElementById("computerChoice").textContent =
    `Computer Choice: ${computerChoice}`;

  document.getElementById("result").textContent =
    `Result: ${result}`;

  document.getElementById("playerScore").textContent =
    `Player: ${score.player}`;

  document.getElementById("computerScore").textContent =
    `Computer: ${score.computer}`;

  checkWinner();
}

function checkWinner() {

  if (score.player >= WIN_SCORE) {

    gameActive = false;

    document.getElementById("turn").textContent =
      "Game Over!";

    const msg = document.getElementById("gameMessage");
    msg.textContent = "🎉 Congratulations! You Won the Game!";
    msg.className = "game-message win";

    disableChoices();

  } else if (score.computer >= WIN_SCORE) {

    gameActive = false;

    document.getElementById("turn").textContent =
      "Game Over!";

    const msg = document.getElementById("gameMessage");
    msg.textContent = "😢 You Lost! Computer Won the Game!";
    msg.className = "game-message lose";

    disableChoices();
  }
}

function disableChoices() {
  document.querySelectorAll(".choice-btn").forEach(btn => {
    btn.disabled = true;
  });
}
