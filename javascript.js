let moves = ["rock", "paper", "scissors"]
let playerMove = prompt("Type in either rock, paper or scissors in lowercase!")
let computerMove = moves[Math.floor(Math.random() * moves.length)];

function getWinner(playerMove, computerMove) {
// validation of player input
    if (!moves.includes(playerMove)) {
         return `Invalid input. Please choose either rock, scissors or paper.`
    }

    if(playerMove === computerMove) {
        return `0`;
        }
        else if(playerMove === "rock" && computerMove === "scissors") {
            return `1`;
        }
        else if(playerMove === "scissors" && computerMove === "paper") {
            return `1`;
        }
        else if(playerMove === "paper" && computerMove === "rock") {
            return `1`;
        }
        else if(playerMove === "rock" && computerMove === "paper") {
            return `-1`;
        }
        else if(playerMove === "scissors" && computerMove === "rock") {
            return `-1`;
        }
        else if(playerMove === "paper" && computerMove === "scissors") {
            return `-1`;
        }
  }

let result = alert(getWinner(playerMove, computerMove))





//let result = getWinner("rock", "paper");

/*
if(playerMove === computerMove) {
console.log("It's a draw!");
}
else if(playerMove === "rock" && computerMove === "scissors") {
    console.log("Player wins!")
}
else if(playerMove === "scissors" && computerMove === "paper") {
    console.log("Player wins!")
}
else if(playerMove === "paper" && computerMove === "rock") {
    console.log("Player wins!")
}
else if(playerMove === "rock" && computerMove === "paper") {
    console.log("Computer wins!")
}
else if(playerMove === "scissors" && computerMove === "rock") {
    console.log("Computer wins!")
}
else if(playerMove === "paper" && computerMove === "scissors") {
    console.log("Computer wins!")
}
else {
    console.log("Invalid input. Please choose either rock, scissors or paper.")
}*/






/* Task for function 4
const random = Math.floor(Math.random() * moves.length); 
console.log (random, moves[random])
*/

/*
    if (hour < 18) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }
        
      */

/*
possible combinations:
Player   -   Computer
---------------------------------------------------------
rock - scissors     -> ROCK         -> PLAYER WINS
rock - paper        -> PAPER        -> COMPUTER WINS
rock - rock         -> DRAW         -> DRAW
scissors - paper    -> SCISSORS     -> PLAYER WINS
scissors - rock     -> ROCK         -> COMPUTER WINS
scissors - scissors -> DRAW         -> DRAW
paper - rock        -> PAPER        -> PLAYER WINS
paper - scissors    -> SCISSORS     -> COMPUTER WINS
paper - paper       -> DRAW         -> DRAW
*/