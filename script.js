
// const start = document.querySelector('#start');
// start.addEventListener('click', () =>{
//     game();
// });
const result = document.querySelector('#results');
const resultPara = document.querySelector('#results-para');
const playerCounter = document.querySelector('#player-score');
const computerCounter = document.querySelector('#computer-score');
const playerRoundSelection = document.querySelector('#player-selection');
const computerRoundSelection = document.querySelector('#computer-selection');
const containerResults = document.querySelector('.container-results');

let playerScore = 0;
let computerScore = 0;



function computerPlay(){ 
    let gameChoices = ["rock", "paper", "scissors"];
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerSelection; 
}

function capitalise(string) {
    if (typeof string !== 'string') {
        return;
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// function game() {


    // function totalScore() {
    //     // update playerScore and computerScore

    // }

    function playRound(playerSelection, computerSelection){
        // const newPlayerSelection = playerSelection.toLowerCase(); 
        if (playerSelection == computerSelection) { 
            results.textContent = ("You both chose the same item!");
            resultPara.textContent = "Let's go again!";
            displayRoundResults();
        } else if ( (playerSelection === "rock") && (computerSelection === "paper") ||
                    (playerSelection === "paper") && (computerSelection === "scissors") ||
                    (playerSelection === "scissors") && (computerSelection === "rock")) {
            console.log("You lost, " + computerSelection + " beats " + playerSelection + "!");
            results.textContent = 'You lost.';
            resultPara.textContent = (capitalise(computerSelection) + " beats " + playerSelection + "!");
            displayRoundResults();
            computerScore++
            computerCounter.textContent = computerScore;
        } else if ( (playerSelection === "rock") && (computerSelection === "scissors") ||
                    (playerSelection === "paper") && (computerSelection === "rock") ||
                    (playerSelection === "scissors") && (computerSelection === "paper")) {
            console.log("You won! " + playerSelection + " beats " + computerSelection + "!");    
            results.textContent = 'You won!';
            resultPara.textContent = (capitalise(playerSelection) + " beats " + computerSelection + "!");
            displayRoundResults();
            playerScore++;
            playerCounter.textContent = playerScore;
        } else {
            console.log("There was an error! Try again");
            results.textContent = ("There was an error! Try again");
        }
        if (playerScore == 5) {
            results.textContent = "YOU WON!"
            // containerResults.style.cssText = 'height: 203.818';
            resultPara.textContent = '';  
        } else if (computerScore == 5) {
            results.style.cssText = 'color: #E76F51; font-size:64px';
            // containerResults.style.cssText = 'height: 203.818';
            results.textContent = "GAME OVER";
            resultPara.textContent = '';

        }

        function displayRoundResults() {
            computerRoundSelection.textContent = computerSelection;
            playerRoundSelection.textContent = playerSelection;
        }
    }

    const computerSelection = computerPlay; 

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>{
        button.addEventListener('click', () => {
            let playerSelection = button.id;
            console.log(playerSelection);
            playRound(playerSelection, computerSelection());           
        })
    })

    function printResults() {
        if (playerScore > computerScore) {
            console.log("You won!" + playerScore + " to " + computerScore + "!");
        } else if (playerScore < computerScore) {
            console.log("You lost. " + computerScore + " to " + playerScore + " !");
        } else if (playerScore == computerScore){
            console.log('tie!')
        }   
    }
// }