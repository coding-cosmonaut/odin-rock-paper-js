let computerScore = 0;
let playerScore = 0;
const resultsDiv = document.querySelector("#results");
const currentScore = document.querySelector("p");
const playBtns = document.querySelectorAll("button");
const playBtnsArr = Array.from(playBtns).map((item) => {
  item.addEventListener("click", playRound);
  return item;
});
currentScore.textContent = `Current Score: Player:${playerScore} Computer:${computerScore}`;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  } else {
    return "Error";
  }
}

function playRound(
  e,
  playerSelection = e.target.textContent,
  computerSelection = getComputerChoice()
) {
  let player = playerSelection.toLowerCase();
  if (player === computerSelection) {
    return (resultsDiv.innerHTML = `Tie! Please select again!`);
  } else if (player !== computerSelection) {
    if (player === "rock") {
      if (computerSelection === "scissors") {
        playerScore += 1;
        currentScore.textContent = `Current Score: Player:${playerScore} Computer:${computerScore}`;
        return playerScore === 5
          ? endgame()
          : (resultsDiv.innerHTML = `You win! ${player} beats ${computerSelection}.`);
      } else {
        computerScore += 1;
        currentScore.textContent = `Current Score: Player:${playerScore} Computer:${computerScore}`;
        return computerScore === 5
          ? endgame()
          : (resultsDiv.innerHTML = `You lose! ${computerSelection} beats ${player}.`);
      }
    } else if (player === "paper") {
      if (computerSelection === "rock") {
        playerScore += 1;
        currentScore.textContent = `Current Score: Player:${playerScore} Computer:${computerScore}`;
        return playerScore === 5
          ? endgame()
          : (resultsDiv.innerHTML = `You win! ${player} beats ${computerSelection}.`);
      } else {
        computerScore += 1;
        currentScore.textContent = `Current Score: Player:${playerScore} Computer:${computerScore}`;
        return computerScore === 5
          ? endgame()
          : (resultsDiv.innerHTML = `You lose! ${computerSelection} beats ${player}.`);
      }
    } else if (player === "scissors") {
      if (computerSelection === "paper") {
        playerScore += 1;
        currentScore.textContent = `Current Score: Player:${playerScore} Computer:${computerScore}`;
        return playerScore === 5
          ? endgame()
          : (resultsDiv.innerHTML = `You win! ${player} beats ${computerSelection}.`);
      } else {
        computerScore += 1;
        currentScore.textContent = `Current Score: Player:${playerScore} Computer:${computerScore}`;
        return computerScore === 5
          ? endgame()
          : (resultsDiv.innerHTML = `You lose! ${computerSelection} beats ${player}.`);
      }
    }
  } else {
    console.log("IDK");
  }
}

function endgame() {
  if (playerScore === 5) {
    computerScore = 0;
    playerScore = 0;
    return (resultsDiv.innerHTML =
      "You beat the computer! -- <strong>Select again to restart.</strong>");
  } else {
    computerScore = 0;
    playerScore = 0;
    return (resultsDiv.innerHTML =
      "Computer beat ya. -- <strong>Select again to restart.</strong>");
  }
}
