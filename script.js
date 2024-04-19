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
    const playerChoiceContent = document.querySelector("#player-choice");
    const computeChoiceContent = document.querySelector("#computer-choice");
    const winner = document.querySelector("#match-results");
    // Display choices here
    const choices = document.querySelectorAll(".btn");
    choices.forEach(choice => {choice.addEventListener("click", () => {const playerChoice = choice.dataset.choice; playRound(playerChoice)})});
    function playRound(playerChoice) {
        let computerChoice = getComputerChoice();
	playerChoiceContent.textContent = "You Chose:" +  playerChoice;
	computerChoiceContent.textContent = "Computer choose:" + computerChoice;
	let result = gameRound(playerChoice, computerChoice);
        if (result.includes('Win')) {
                playerScore++;
        } else if (result.includes('Lose')) {
                computerScore++;};
	updateScores();
	checkWinner();
    };
    // current score here
    function updateScores() {
	const computerScores = document.querySelector("#computer-score");
	const playerScores = document.querySelector("#player-score");
	playerScores.textContent = playerScore;
	computerScores.textContent = computerScore;
    };
    function checkWinner() {
	if(playerScore >= 5) {
	    winner.textContent = "You won the match!";
	} else if(computerScore >= 5) {
	    winner.textContent = "Computer won the match";
	};
    };
};
playGame();

