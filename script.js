// Function to get computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    const resultMessage = `Computer chose ${computerSelection}. ${result}`;
    displayResult(resultMessage);
}

// Function to determine the winner of a round
function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// Function to display the result
function displayResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
}

// Event listeners for the choice buttons
const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        playRound(playerSelection);
    });
});

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to update the scoreboard
function updateScoreboard() {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    const resultMessage = `Computer chose ${computerSelection}. ${result}`;
    displayResult(resultMessage);
    updateScore(result);
}

// Function to update the score based on the result
function updateScore(result) {
    if (result === 'You win!') {
        playerScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }
    updateScoreboard();
}

// Rest of the code remains the same
