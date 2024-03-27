// Computer Random Choice
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  }

const choices = ["Rock","Paper","Scissors"];

// Scores
let playerScore = 0
let computerScore = 0
let draws = 0

// Rounds
let rounds = 0;

let banner = document.querySelector(".banner")
banner.textContent = "Rounds left: " + 5;

let roundResult = document.querySelector(".round-result")
roundResult.textContent = "Pick one to start the game"

let currentScore = document.querySelector(".game-status")
currentScore.textContent = "Player: " + playerScore + " Computer: " + computerScore + " Draws: " + draws;

// Round Function
function playRound(computerChoice,playerChoice) {
    // DRAW CASE
    if (playerChoice === computerChoice) {
        roundResult.textContent = playerChoice + " vs " + computerChoice + " - DRAW!";
        draws++;
    }
    // WIN CASE
    else if (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Rock") {
        roundResult.textContent = "YOU WIN! " + playerChoice + " beats " + computerChoice;
        playerScore++;
    }
    // LOSE CASE
    else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Scissors" && playerChoice === "Paper" || computerChoice === "Paper" && playerChoice === "Rock") {
        roundResult.textContent = "YOU LOSE! " + computerChoice + " beats " + playerChoice;
        computerScore++;
    }
    currentScore.textContent = "Player: " + playerScore + " Computer: " + computerScore + " Draws: " + draws;
  }


function checkEndOfGame() {
    if (rounds % 5 === 0) {
        currentScore.textContent = "Player: " + playerScore + " Computer: " + computerScore + " Draws: " + draws;
        if (playerScore > computerScore) {
            banner.textContent = "PLAYER WINS THE MATCH! Congratulations";
        } else if (playerScore < computerScore) {
            banner.textContent = "Computer wins the match, what a shame";
        } else {
            banner.textContent = "No one wins!";
        }
        playerScore = 0;
        computerScore = 0;
        draws = 0;
        rounds = 0;
    }
}


const playerButtons = document.querySelectorAll(".player-btn")

playerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let computerChoice = getComputerChoice(choices);
        let playerChoice = btn.id;
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        console.log(playerChoice)
        playRound(computerChoice, playerChoice);
        rounds++;
        banner.textContent = "Rounds left: " + (5 - rounds);
        if (rounds % 5 === 0) {
            checkEndOfGame();
        }
    });
});