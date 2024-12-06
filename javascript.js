let moves = ["rock", "paper", "scissors"];
let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let draws = 0;

function getWinner(playerMove, computerMove) {
    // Validation of player input
    if (!moves.includes(playerMove)) {
        return `Invalid input. Please choose either rock, scissors or paper.`
    }

    if(playerMove === computerMove) {
        draws++;
        return 0;
    }
    else if(playerMove === "rock" && computerMove === "scissors") {
        wins++;
        return 1;
    }
    else if(playerMove === "scissors" && computerMove === "paper") {
        wins++;
        return 1;
    }
    else if(playerMove === "paper" && computerMove === "rock") {
        wins++;
        return 1;
    }
    else if(playerMove === "rock" && computerMove === "paper") {
        losses++;
        return -1;
    }
    else if(playerMove === "scissors" && computerMove === "rock") {
        looses++
        return -1;
    }
    else if(playerMove === "paper" && computerMove === "scissors") {
        looses++
        return -1;
        }
    }

function playGame() {
    do {
        let playerMove = prompt("Type in either rock, paper, or scissors in lowercase!");
        let computerMove = moves[Math.floor(Math.random() * moves.length)];

        let result = getWinner(playerMove, computerMove);
    }

        gamesPlayed++;

        
        let outcomeMessage = alert(`Games Played: ${gamesPlayed}\nWins: ${wins}\nLosses: ${losses}\nDraws: ${draws}`)";
        

     while (confirm("Do you want to play again?"));

    // Display final stats
    alert(`Games Played: ${gamesPlayed}\nWins: ${wins}\nLosses: ${losses}\nDraws: ${draws}`);
}

// Start the game
playGame();



























/*
let playGame = true;
let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let draws = 0;

while (playGame) {
let moves = ["rock", "paper", "scissors"]
let playerMove = prompt("Type in either rock, paper or scissors in lowercase!")
let computerMove = moves[Math.floor(Math.random() * moves.length)];

function getWinner(playerMove, computerMove) {
// validation of player input
    if (!moves.includes(playerMove)) {
         return `Invalid input. Please choose either rock, scissors or paper.`
    }

    if(playerMove === computerMove) {
        draws++;
        return 0;
        }
        else if(playerMove === "rock" && computerMove === "scissors") {
            wins++;
            return 1;
        }
        else if(playerMove === "scissors" && computerMove === "paper") {
            wins++;
            return 1;
        }
        else if(playerMove === "paper" && computerMove === "rock") {
            wins++;
            return 1;
        }
        else if(playerMove === "rock" && computerMove === "paper") {
            losses++;
            return -1;
        }
        else if(playerMove === "scissors" && computerMove === "rock") {
            looses++
            return -1;
        }
        else if(playerMove === "paper" && computerMove === "scissors") {
            looses++
            return -1;
        }
    }

    let result = alert((getWinner(playerMove, computerMove)), showStats)

    playGame = confirm("Do you want to play again?")
}

function showStats() {
    alert("Games Played: ${gamesPlayed}\nWins: ${wins}\nLosses: ${losses}\nDraws: ${draws}");
}


*/





/*if (playGame) true; {
   if  ("do you what to play again?");
}

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