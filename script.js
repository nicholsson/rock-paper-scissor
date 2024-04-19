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
<<<<<<< HEAD

// Logic of one single round of Rock-Paper-Scissors;

=======
>>>>>>> 2516425707d700a5ff8a4d4b23bfe8b2d196a83f
function gameRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')){
            return "Win"; 
        };
    return "Lose";
};

// The game will be played until a score of 5 points is reached by either player;

//

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
<<<<<<< HEAD
    let playerChoice = "";

    const playerChoiceContent = document.querySelector("#player-choice");
    const computerChoiceContent = document.querySelector("#computer-choice");
    const playerChoiceRock = document.querySelector(".rock");
    const playerChoicePaper = document.querySelector(".paper");
    const playerChoiceScissors = document.querySelector(".scissors");
    playerChoiceRock.addEventListener("click", () => {
        playerChoice = "rock";
        playRound();
    });

    playerChoicePaper.addEventListener("click", () => {
        playerChoice = "paper";
        playRound();
    });

    playerChoiceScissors.addEventListener("click", () => {
        playerChoice = "scissors";
        playRound();
    });
    
    function playRound(){
        let computerChoice = getComputerChoice();
        playerChoiceContent.textContent = "You choose: " + playerChoice;
        computerChoiceContent.textContent = "Computer choose: " + computerChoice;
        let result = gameRound(playerChoice, computerChoice);
        if (result.includes('You win')) {
=======
    // Display choices here
    let result = gameRound(answer, computerChoice);
    if (result.includes('Win')) {
>>>>>>> 2516425707d700a5ff8a4d4b23bfe8b2d196a83f
            playerScore++;
    } else if (result.includes('Lose')) {
            computerScore++;
<<<<<<< HEAD
        };
        updateScores();
        checkWinner();       
    };

    function updateScores(){
        const computerScores = document.querySelector("#computer-score");
        const playerScores = document.querySelector("#player-score");
        playerScores.textContent = "Your score: " + playerScore;
        computerScores.textContent = "Computer score: " + computerScore;
    };

    function checkWinner(){
        const winner = document.querySelector("#winner");
        if (playerScore >= 5){
            winner.textContent = "You won the match!";
        } else if (computerScore >= 5){
            winner.textContent = "Computer won the match!";
        }
    };      
};
playGame();
=======
      };
    // Display current score here


    };
    console.log('Final score:')
    console.log('Player: ' + playerScore);
    console.log('Computer: ' + computerScore);
}
//start of the game

>>>>>>> 2516425707d700a5ff8a4d4b23bfe8b2d196a83f
