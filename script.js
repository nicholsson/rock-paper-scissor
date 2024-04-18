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

// The results of each round have to be reported and updated at the end of each round, up until the match is over;
// The match is composed of 5 rounds (ties are not counted); 

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let answer = prompt('Rock, paper or scissors? ').toLowerCase();
        if (!['rock', 'paper', 'scissors'].includes(answer)){
            console.log('invalid choice, please make sure you have typed correctly!')
            i--;
            continue;
        };
        console.log('your choice: ' + answer);
        console.log('computer\'s choice: ' + computerChoice);
        let result = gameRound(answer, computerChoice);
        if (result.includes('You win')) {
            playerScore++;
        } else if (result.includes('You lose')) {
            computerScore++;
        };
        console.log('Score after round ' + i + ": Player = " + playerScore + ", Computer: " + computerScore);
    };
    console.log('Final score:')
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);
}
//start of the game
playGame();