// The game is organized as follows: the computer choice is taken from a choice list ["rock", "paper", "scissors"];
// The computer makes its choice by picking a random index of the choice list;
// One game round has the goal to determine the result of the round;

function randomInteger(){
    return Math.floor(Math.random() * 3);
};
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[randomInteger()];
};
console.log(getComputerChoice());

function gameRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')){
            return "You win! " + playerSelection + " beats " + computerSelection; 
        };
    return "You lose! " + computerSelection + " beats " + playerSelection;
};

// The game will be played until a score of 5 points is reached by either player;

function playGame(playerChoice){
    let playerScore = 0;
    let computerScore = 0;

   
    let computerChoice = getComputerChoice();
    if (!['rock', 'paper', 'scissors'].includes(playerChoice)){
        console.log('invalid choice, please make sure you have typed correctly!');
    };
    console.log('your choice: ' + playerChoice);
    console.log('computer\'s choice: ' + computerChoice);
    let result = gameRound(playerChoice, computerChoice);
    if (result.includes('You win')) {
        playerScore++;
    } else if (result.includes('You lose')) {
        computerScore++;
    };

    console.log('Final score:')
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);
}
//start of the game

// Event listener for button selection;
const playerChoiceRock = document.querySelector(".rock");
const playerChoicePaper = document.querySelector(".paper");
const playerChoiceScissors = document.querySelector(".scissors");

playerChoiceRock.addEventListener("click", () => {
    playGame("rock");
});

playerChoicePaper.addEventListener("click", () => {
    playGame("paper");
});

playerChoiceScissors.addEventListener("click", () => {
    playGame("scissors");
});