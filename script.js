function getComputerChoice() {
  selection = Math.floor(Math.random() * 3) + 1;
  if (selection === 1) {
    return "Rock";
  }
  if (selection === 2) {
    return "Paper";
  }
  if (selection === 3) {
    return "Scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Rock, Paper, or Scissors?");

  if (userChoice.toLowerCase() === "rock") {
    return "Rock";
  }
  if (userChoice.toLowerCase() === "paper") {
    return "Paper";
  }
  if (userChoice.toLowerCase() === "scissors") {
    return "Scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (i === 4) {
      console.log(`Score was human ${humanScore} Computer: ${computerScore}`);
    }
  }
  function playRound(humanSelection, computerSelection) {
    if (humanSelection === "Rock" && computerSelection === "Scissors") {
      console.log("You win");
      humanScore++;
    } else if (humanSelection === "Rock" && computerSelection === "Paper") {
      console.log("Computer Wins!");
    }

    if (humanSelection === "Paper" && computerSelection === "Rock") {
      console.log("You win");
      humanScore++;
    } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
      console.log("Computer Wins!");
    }

    if (humanSelection === "Scissors" && computerSelection === "Paper") {
      console.log("You win");
      humanScore++;
    } else if (humanSelection === "Scissors" && computerSelection === "Rock") {
      console.log("Computer Wins!");
    }

    if (humanSelection === computerSelection) {
      console.log("It's a tie");
    }
  }
}

playGame();
