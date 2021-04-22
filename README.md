The Odin Project: Rock, Paper, Scissors - Final

by Justin Bauer          
GitHub: jbNype           
http://justinbauer.design     



1. Created a function called computerPlay which allows the computer to choose a random item of 'rock', 'paper', or 'scissors. I achieved this by using an array and selecting the index with Math.floor(Math.random()) functions. 
2. Created the function called playRound which compares the variables playerSelection and computerSelection and console logs the result if it was a loss, a win, or an error. If there is an error it corrects the integer for the coming loop. 
3. Created game function with playRound embedded. A loop is used to call the playRound() five times, each time prompting the player for a new input. If the input doesn't match 'rock', 'paper', 'scissors' the loop interger is reduces and an eror message is console logged. 
4. Once the game is finished a message is console logged with the result of the game. 

Added DOM
5. Created buttons with event listeners for player input. 
6. With computerPlay anbd player inpput the roundPlay compares and returns game results.
7. DOM is used to update results, score, and gives a bit of enouragement to the player. 
8. After 5 success wins, when the score reaches 5, game is called for a win or loss. 

In the future I would like to added a reset button a limiter on the score counter which disengas listeners on player input buttons so game is only playable after rest. 