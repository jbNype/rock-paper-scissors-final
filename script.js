/******************************************************************************* 
**************** The Odin Project: Rock, Paper, Scissors - Final ***************
********************************************************************************

***********************          by Justin Bauer          **********************
***********************          GitHub: jbNype           **********************
***********************     http://justinbauer.design     **********************

********************************************************************************/

// const variables for DOM
const result = document.querySelector('#results');
const resultPara = document.querySelector('#results-para');
const playerCounter = document.querySelector('#player-score');
const computerCounter = document.querySelector('#computer-score');
const playerRoundSelection = document.querySelector('#player-selection');
const computerRoundSelection = document.querySelector('#computer-selection');
const containerResults = document.querySelector('.container-results');

// Scores to allow player to view round score
let playerScore = 0;
let computerScore = 0;

const computerSelection = computerPlay; 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        playRound(playerSelection, computerSelection());           
    });
});

function computerPlay(){ 
    let gameChoices = ["rock", "paper", "scissors"];
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerSelection; 
}

// return capitalised string for display results
function capitalise(string) {
    if (typeof string !== 'string') {
        return;
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// compares the outcome of each round and deliverys results, update score, and encourages the player
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) { 
        results.textContent = ("You both chose the same item!");
        resultPara.textContent = "Let's go again!";
        displayRoundResults();
    } else if ( (playerSelection === "rock") && (computerSelection === "paper") ||
                (playerSelection === "paper") && (computerSelection === "scissors") ||
                (playerSelection === "scissors") && (computerSelection === "rock")) {
        results.textContent = 'You lost.';
        resultPara.textContent = (capitalise(computerSelection) + " beats " + playerSelection + "!");
        displayRoundResults();
        computerScore++
        computerCounter.textContent = computerScore;
    } else if ( (playerSelection === "rock") && (computerSelection === "scissors") ||
                (playerSelection === "paper") && (computerSelection === "rock") ||
                (playerSelection === "scissors") && (computerSelection === "paper")) {
        results.textContent = 'You won!';
        resultPara.textContent = (capitalise(playerSelection) + " beats " + computerSelection + "!");
        displayRoundResults();
        playerScore++;
        playerCounter.textContent = playerScore;
    } else {
        results.textContent = ("There was an error! Try again");
    }
    if (playerScore == 5) {
        results.textContent = "YOU WON!"
        resultPara.textContent = '';  
    } else if (computerScore == 5) {
        results.style.cssText = 'color: #E76F51; font-size:64px';
        results.textContent = "GAME OVER";
        resultPara.textContent = '';
    }

    function displayRoundResults() {
        computerRoundSelection.textContent = computerSelection;
        playerRoundSelection.textContent = playerSelection;
    }
}


