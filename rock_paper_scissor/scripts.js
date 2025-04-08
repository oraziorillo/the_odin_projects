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

    humanScore = 0;
    computerScore = 0;

    const game = document.createElement("div");
    game.setAttribute("class", "game");
    
    
    const userScoreElement = document.createElement("div");
    userScoreElement.setAttribute("class", "score");
    const userScoreTitle = document.createElement("h2");    
    userScoreTitle.textContent = "Your score:"
    userScoreElement.appendChild(userScoreTitle);
    const userScoreNumber = document.createElement("p");
    userScoreNumber.textContent = humanScore.toString();
    userScoreElement.appendChild(userScoreNumber);

    const computerScoreElement = document.createElement("div");
    computerScoreElement.setAttribute("class", "score");
    const computerScoreTitle = document.createElement("h2");    
    computerScoreTitle.textContent = "Computer score:"
    computerScoreElement.appendChild(computerScoreTitle);
    const computerScoreNumber = document.createElement("p");
    computerScoreNumber.textContent = computerScore.toString();
    computerScoreElement.appendChild(computerScoreNumber);

    const scores = document.createElement("div")
    scores.setAttribute("class", "scores");
    scores.appendChild(userScoreElement);
    scores.appendChild(computerScoreElement);

    game.appendChild(scores);
    document.getElementsByClassName("container")[0].appendChild(game);


    // while (humanScore < 3 && computerScore < 3) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    // if (humanScore > computerScore) {
    //     console.log(`You win the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    // }
    // else {
    //     console.log(`Computer wins the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    // }
}

let humanScore = 0;
let computerScore = 0;

document.getElementsByTagName('button')[0].addEventListener("click", playGame);