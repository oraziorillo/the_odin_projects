function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Computer chose '${computerChoice}'. It's a tie!`);
        return 0;
    }
    
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`Computer chose '${computerChoice}'. You win this round!`);
        return 1;
    } else {
        console.log(`Computer chose '${computerChoice}'. Computer wins this round!`);
        return -1;
    }
}

function choooseWeapon(event) {

    const playButton = document.querySelector("#reset");
    playButton.textContent = "Reset Game";

    const weapon = this.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(weapon, computerSelection);
    
    const userScoreNumber = document.querySelector("#user-score p");
    const computerScoreNumber = document.querySelector("#computer-score p");
    const resultElement = document.querySelector(".result");

    if (result === 1) {
        userScoreNumber.textContent = ++humanScore;
        resultElement.textContent = `Computer chose ${computerSelection}. You win!`;
    } else if (result === -1) {
        computerScoreNumber.textContent = ++computerScore;
        resultElement.textContent = `Computer chose ${computerSelection}. You lose!`;
    } else {
        resultElement.textContent = `Computer chose ${computerSelection}. It's a tie!`;
    }

    if (Number(userScoreNumber.textContent) >= 3 || Number(computerScoreNumber.textContent) >= 3) {
        endGame();
    }
}

function endGame() {
    const endGame = document.createElement("div");
    endGame.setAttribute("class", "end-game");
    const endGameTitle = document.createElement("h1");
    if (humanScore > computerScore) {
        endGameTitle.textContent = "And the winner is...YOU!";
    } else {
        endGameTitle.textContent = "And the winner is...THE COMPUTER!";
    }
    endGame.appendChild(endGameTitle);
    document.getElementsByClassName("game")[0].appendChild(endGame);

    const choiceButtons = document.querySelectorAll("button.choice");
    choiceButtons.forEach((button) => {
        button.disabled = true; // Disable buttons instead of trying to remove event listeners
    });
}

function resetGame() {
    const game = document.getElementsByClassName("game")[0];
    if (game) {
        game.remove();
    }
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    const game = document.createElement("div");
    game.setAttribute("class", "game");
    
    // Create and initialize the human's scores
    const userScoreElement = document.createElement("div");
    userScoreElement.setAttribute("class", "score");
    userScoreElement.setAttribute("id", "user-score");
    const userScoreTitle = document.createElement("h2");    
    userScoreTitle.textContent = "Your score:"
    userScoreElement.appendChild(userScoreTitle);
    const userScoreNumber = document.createElement("p");
    userScoreNumber.textContent = humanScore.toString();
    userScoreElement.appendChild(userScoreNumber);

    // Create and initialize the computer's score
    const computerScoreElement = document.createElement("div");
    computerScoreElement.setAttribute("class", "score");
    computerScoreElement.setAttribute("id", "computer-score");
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

    // Create and initialize the choices
    const choices = document.createElement("div");
    choices.setAttribute("class", "choices");

    // Create the result block
    const resultElement = document.createElement("h2");
    resultElement.setAttribute("class", "result");

    // Create the buttons for the choices
    const rock = document.createElement("button");
    rock.setAttribute("class", "choice");
    rock.textContent = "Rock";
    rock.addEventListener("click", choooseWeapon);
    choices.appendChild(rock);

    const paper = document.createElement("button");
    paper.setAttribute("class", "choice");
    paper.textContent = "Paper";
    paper.addEventListener("click", choooseWeapon);
    choices.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.setAttribute("class", "choice");
    scissors.textContent = "Scissors";
    scissors.addEventListener("click", choooseWeapon);
    choices.appendChild(scissors);

    game.appendChild(scores);
    game.appendChild(choices);
    game.appendChild(resultElement);

    if (document.getElementsByClassName("game").length > 0) {
        document.getElementsByClassName("game")[0].remove();
    }
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
let resultText = "";

document.getElementsByTagName('button')[0].addEventListener("click", playGame);