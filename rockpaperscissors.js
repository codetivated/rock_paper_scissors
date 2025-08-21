let score = { human: 0, computer: 0 };
let playAgain = true;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Enter rock, paper, or scissors:").toString().toLowerCase();
  return humanChoice;

}

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  if (computerChoice === humanChoice) {
    score.human += 1;
    score.computer += 1;
    return "It's a tie!";
  }
  if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
      (computerChoice === 'paper' && humanChoice === 'rock') ||
      (computerChoice === 'scissors' && humanChoice === 'paper')) {
        score.computer += 1;
    return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
  } else {
    score.human += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  }
}

while (playAgain) {
  console.log(playRound());
  console.log(`Score - Human: ${score.human}, Computer: ${score.computer}`);
  playAgain = confirm("Do you want to play again?");
}

console.log("------------------------");
console.log("Game over!");

if (score.human > score.computer) {
  console.log("You are the overall winner!");
} else if (score.human < score.computer) {
  console.log("Computer is the overall winner!");
} else {
  console.log("The game is a tie overall!");
}
console.log("Thanks for playing!");