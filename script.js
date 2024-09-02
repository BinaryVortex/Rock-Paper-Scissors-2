let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const maxRounds = 20;

function playerChoice(choice) {
    const computerChoice = getComputerChoice();
    document.getElementById('player-choice').textContent = `Your choice: ${choice}`;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;

    const result = determineWinner(choice, computerChoice);
    document.getElementById('result').textContent = `Result: ${result}`;
    updateScore(result);
    rounds++;
    checkForWinner();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    } else if (
        (player === 'rock' && computer === 'scissors') || 
        (player === 'scissors' && computer === 'paper') || 
        (player === 'paper' && computer === 'rock')
    ) {
        return 'Player Wins';
    } else {
        return 'Computer Wins';
    }
}

function updateScore(result) {
    if (result === 'Player Wins') {
        playerScore++;
    } else if (result === 'Computer Wins') {
        computerScore++;
    }
}

function checkForWinner() {
    if (rounds === maxRounds) {
        if (playerScore > computerScore) {
            alert('You win the game!');
        } else if (computerScore > playerScore) {
            alert('Computer wins the game!');
        } else {
            alert('The game is a draw!');
        }
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    document.getElementById('player-choice').textContent = 'Your choice: ';
    document.getElementById('computer-choice').textContent = "Computer's choice: ";
    document.getElementById('result').textContent = 'Result: ';
}
