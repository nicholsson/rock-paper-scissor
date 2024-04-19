function randomInteger(){
    return Math.floor(Math.random() * 3);
};
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[randomInteger()];
};
function gameRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')){
            return "Win"; 
        };
    return "Lose";
};
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    // Display choices here
    let result = gameRound(answer, computerChoice);
    if (result.includes('Win')) {
            playerScore++;
    } else if (result.includes('Lose')) {
            computerScore++;
      };
    // Display current score here


    };
    console.log('Final score:')
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);
}
//start of the game

