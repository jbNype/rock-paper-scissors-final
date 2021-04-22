/******************************************************************************* 
******************** The Odin Project: Rock, Paper, Scissors *******************
********************************************************************************

***********************          by Justin Bauer          **********************
***********************          GitHub: jbNype           **********************
***********************     http://justinbauer.design     **********************

*******************************************************************************/

function computerPlay(){ //allows computer to randomly choose item
    let gameChoices = ["rock", "paper", "scissors"];
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerSelection; // returns computerSelection for each loop
}

function game() {

    //variables to track the score of each player
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection){
        //lower case to string to allow for later code to process it
        const newPlayerSelection = playerSelection.toLowerCase(); 
        //if the variable are equal return statement
        if (newPlayerSelection == computerSelection) { 
            console.log("You both chose the same item!");
        //searches for losses for the player and console.logs string with outcome
        } else if ( (newPlayerSelection === "rock") && (computerSelection === "paper") ||
                    (newPlayerSelection === "paper") && (computerSelection === "scissors") ||
                    (newPlayerSelection === "scissors") && (computerSelection === "rock")) {
            console.log("You lost, " + computerSelection + " beats " + newPlayerSelection + "!");
            return computerScore++;
        //searches for wins for the player and console.logs string with outcome
        } else if ( (newPlayerSelection === "rock") && (computerSelection === "scissors") ||
                    (newPlayerSelection === "paper") && (computerSelection === "rock") ||
                    (newPlayerSelection === "scissor") && (computerSelection === "paper")) {
            console.log("You won " + newPlayerSelection + " beats " + computerSelection + "!");    
            return playerScore++;
        // if there was an input error with prompt() it reports the error and minuses an integer from the loop
        } else {
            console.log("There was an error! Try again");
            i--;
        }
    }

    const computerSelection = computerPlay;

    //loop for game() and prompts player choice for each turn
    let i;
    for (i=1; i <= 5; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");

    playRound(playerSelection, computerSelection());
    }

    // display the overall score and who won.
    if (playerScore > computerScore) {
        console.log("Good job! You won the game with a total score of " + playerScore + " to " + computerScore + "!");
    } else if (playerScore < computerScore) {
        console.log("Oh, no! You lost! The computer beat you " + computerScore + " to " + playerScore + " !");
    } else {
        console.log("It looks like you have tied!");
    }   
}