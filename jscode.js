// Welcome
console.log("Welcome to Rock Paper Scissors");

// Computer Random Choice
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  }

const choices = ["Rock","Paper","Scissors"];

// Player Choice
function getPlayerChoice() {
    let newstring = "";
    while (true) {
        let playerChoice = prompt('Please enter your selection between "Rock","Paper" and "Scissors"');
        let allsmall = playerChoice.toLowerCase()
        let firstletter = allsmall.charAt(0).toUpperCase();
        let slice1on = allsmall.slice(1);
        newstring = firstletter + slice1on;
        if (newstring === "Rock" || newstring === "Paper" || newstring === "Scissors") {
            return newstring;
        } else {
            alert("Invalid User Input. Please try again");
        }    
    }
  }

// Scores
let playerScore = 0
let computerScore = 0
let draws = 0


// Round Function
function playRound(computerChoice,playerChoice) {
    // DRAW CASE
    if (playerChoice === computerChoice) {
        console.log(playerChoice + " vs " + computerChoice + " - DRAW!");
        draws++;
        console.log(draws);
    }
    // WIN CASE
    else if (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Rock") {
        console.log("YOU WIN! " + playerChoice + " beats " + computerChoice);
        playerScore++;
        console.log(playerScore);
    }
    // LOSE CASE
    else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Scissors" && playerChoice === "Paper" || computerChoice === "Paper" && playerChoice === "Rock") {
        console.log("YOU LOSE! " + computerChoice + " beats " + playerChoice);
        computerScore++;
        console.log(computerScore);
    }
  }

// Rounds
let rounds = 0

// Game function
function playgame() {
    while(true) {
        if (rounds === 5) {
            console.log("The final score is: Player = " + playerScore + " Computer = " + computerScore + " Draws = " + draws);
            if (playerScore > computerScore) {
                console.log("PLAYER WINS THE MATCH! Congratulations");
            }
            if (playerScore < computerScore) {
                console.log("Computer wins the match, what a shame");
            }
            if (playerScore === computerScore) {
                console.log("No one wins!");
            }            
            console.log("Game over, thank you for playing.")
            console.log("Refresh the page to play again.")
            break
        }
        else {
            let computerChoice = getComputerChoice(choices);
            let playerChoice = getPlayerChoice();
            playRound(computerChoice,playerChoice);  
            rounds++   
            if (rounds !== 5) {
                console.log("Current score: Player = " + playerScore + " Computer = " + computerScore + " Draws = " + draws);
            }
        }

    }
}

// Main function
playgame()