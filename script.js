// The game is organized as follows: the computer choice is taken from a choice list ["rock", "paper", "scissors"];
// The computer makes its choice by picking a random index of the choice list;
// One game round has the goal to determine the result of the round;

function randomInteger(){
    return Math.floor(Math.random() * 3);
};
function getComputerChoice() {
<<<<<<< HEAD
    let choice = ["rock", "paper", "scissors"];
=======
    let choice = ['Rock', 'Paper', 'Scissors'];
>>>>>>> revision
    return choice[randomInteger()];
};
<<<<<<< HEAD

// Logic of one single round of Rock-Paper-Scissors;

=======
>>>>>>> revision
function gameRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')){
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
            playerScore++;
        } else if (result.includes('You lose')) {
            computerScore++;
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
    const playerChoiceContent = document.querySelector("#player-choice");
    const computeChoiceContent = document.querySelector("#computer-choice");
=======
    const playerChoiceContent = document.querySelector("#pchoice");
    const computerChoiceContent = document.querySelector("#cchoice");
>>>>>>> revision
    const winner = document.querySelector("#match-results");
    // Display choices here
    const choices = document.querySelectorAll(".btn");
// add event listener to each button
    choices.forEach(choice => {choice.addEventListener("click", () => {const playerChoice = choice.dataset.choice; playRound(playerChoice)})});
    function playRound(playerChoice) {
        let computerChoice = getComputerChoice();
	playerChoiceContent.textContent = playerChoice;
	computerChoiceContent.textContent = computerChoice;
	let result = gameRound(playerChoice, computerChoice);
        if (result.includes('Win')) {
                playerScore++;
        } else if (result.includes('Lose')) {
                computerScore++;};
	updateScores();
	checkWinner();
    };
    //Update the current score here
    function updateScores() {
	const computerScores = document.querySelector("#cscore");
	const playerScores = document.querySelector("#pscore");
	playerScores.textContent = playerScore;
	computerScores.textContent = computerScore;
    };
};
