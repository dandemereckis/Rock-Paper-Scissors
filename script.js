const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const result = document.querySelector(".round-result");
const winner = document.querySelector(".game-result");

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = `Tie! You both chose ${computerSelection}.  Try again`;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    playScore.textContent = playerScore;
    result.textContent = `You win! Computer chose ${computerSelection}.  Rock beats Scissors`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    playScore.textContent = playerScore;
    result.textContent = `You win! Computer chose ${computerSelection}.  Paper beats Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    playScore.textContent = playerScore;
    result.textContent = `You win! Computer chose ${computerSelection}.  Scissors beats Paper`;
  }
  if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    compScore.textContent = computerScore;
    result.textContent = `You lose! Computer chose ${computerSelection}.  Rock beats Scissors`;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    compScore.textContent = computerScore;
    result.textContent = `You lose! Computer chose ${computerSelection}.  Paper beats Rock`;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    compScore.textContent = computerScore;
    result.textContent = `You lose! Computer chose ${computerSelection}.  Scissors beats Paper`;
  }
}

rock.addEventListener("click", function () {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  game();
});

paper.addEventListener("click", function () {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  game();
});

scissors.addEventListener("click", function () {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  game();
});

function game() {
  while (playerScore < 3 && computerScore < 3) {
    return playRound(playerSelection, computerSelection);
  }
  if (playerScore === 3) {
    winner.textContent = `You won the best of 5 rounds!`;
  } else if (computerScore === 3) {
    winner.textContent = `You lost the best of 5 rounds!`;
  }
}
