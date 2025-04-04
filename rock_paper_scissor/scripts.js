function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userChoice = prompt('Enter your choice (rock, paper, scissors):');
    if (userChoice === null) {
        return null; // User cancelled the prompt
    }
    const lowerCaseChoice = userChoice.toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(lowerCaseChoice)) {
        return lowerCaseChoice;
    } else {
        alert('Invalid choice. Please enter rock, paper, or scissors.');
        return getHumanChoice(); // Recursively prompt again
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Computer chose '${computerChoice}'. It's a tie!`);
        return;
    }
    
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`Computer chose '${computerChoice}'. You win this round!`);
    } else {
        computerScore++;
        console.log(`Computer chose '${computerChoice}'. Computer wins this round!`);
    }
}

function playGame() {

    while (humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
    else {
        console.log(`Computer wins the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}

let humanScore = 0;
let computerScore = 0;
window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementsByTagName('button')[0].addEventListener("click", playGame);
});
