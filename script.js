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

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt(`Pick Rock, Paper, or Scissors`).toLowerCase();
  computerSelection = getComputerChoice();
  //One if statment works, When I try to use || it breaks.
  if (playerSelection === computerSelection) {
    return `Tie! You both chose ${computerSelection}.  Try again`;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You win! Computer chose ${computerSelection}.  Rock beats Scissors`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return `You win! Computer chose ${computerSelection}.  Paper beats Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You win! Computer chose ${computerSelection}.  Scissors beats Paper`;
  }
  if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    return `You lose! Computer chose ${computerSelection}.  Rock beats Scissors`;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    return `You lose! Computer chose ${computerSelection}.  Paper beats Rock`;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    return `You lose! Computer chose ${computerSelection}.  Scissors beats Paper`;
  }
}
let playerScore = 0;
let computerScore = 0;

function game() {
  while (playerScore < 3 && computerScore < 3) {
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `Player Score: ${playerScore} \nComputer Score: ${computerScore}`
    );
  }
  if (playerScore === 3) {
    console.log(`You have won best of five rounds!`);
  } else if (computerScore === 3) {
    console.log(`You have lost best of five rounds!`);
  }
}

game();
