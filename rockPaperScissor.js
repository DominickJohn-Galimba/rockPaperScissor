function getComputerChoice() {
    const randChoice = Math.floor((Math.random() * 3) + 1);
    if (randChoice === 1) {
        return "Rock";
    }
    else if (randChoice === 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function playerRound(playerSelection, computerSelection) {
    let playerChoice = (playerSelection.charAt(0)).toUpperCase() + (playerSelection.slice(1).toLowerCase())

    if (playerChoice === computerSelection) {
        return "It's a tie!";
    }
    else if (playerChoice === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beat Rock!";
    }
    else if (playerChoice === "Rock" && computerSelection === "Scissor") {
        return "You Win! Rock beat Scissor!";
    }
    else if (playerChoice === "Paper" && computerSelection === "Scissor") {
        return "You Lose! Scissor beat Paper!";
    }
    else if (playerChoice === "Paper" && computerSelection === "Rock") {   
        return "You Win! Paper beat Rock!";
    }
    else if (playerChoice === "Scissor" && computerSelection === "Rock") {
        return "You Lose! Rock beat Scissor!";
    }
    else if (playerChoice === "Scissor" && computerSelection === "Paper") {    
        return "You Win! Scissor beat Paper!";
    }

}
const gameResult = document.getElementById('result');
      gameResult.style.marginTop = "1em";
      gameResult.style.marginBottom = "1em";
      gameResult.style.textAlign = 'center';
      gameResult.style.fontFamily = "sans-serif";
      gameResult.style.fontWeight = "700";
      gameResult.style.fontSize = "70px"; 
      gameResult.style.color = '#FF6700';
const playerCountElement = document.getElementById("win");
const tieCountElement = document.getElementById("tie");
const computerCountElement = document.getElementById("lose");
const textDisplayElement = document.getElementById("textDisplay");
    textDisplayElement.style.marginTop = ".8em";
    textDisplayElement.style.textAlign = 'center';
    textDisplayElement.style.fontFamily = "sans-serif";
    textDisplayElement.style.fontWeight = "700";
    textDisplayElement.style.fontSize = "70px"; 
    textDisplayElement.style.color = '#3B3B58';
const welcomeElement = document.getElementById("welcome");
window.onload = () => {
    welcomeElement.style.display = "block";
}
const rockButtonElement = document.getElementById("Rock");
const paperButtonElement = document.getElementById("Paper");
const scissorButtonElement = document.getElementById("Scissor");

let playerCount = 0; 
let tieCount = 0;
let computerCount = 0;

function displayScore (playerCount, computerCount, tieCount) {
    playerCountElement.textContent = playerCount;
    computerCountElement.textContent = computerCount;
    tieCountElement.textContent = tieCount;
}
  
enableButton();

const rockButton = document.querySelector('#Rock');
rockButton.addEventListener('click', () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    const getWinner = playerRound(playerSelection, computerSelection);
    welcomeElement.style.display = 'none';
    setTimeout(() => {
        gameResult.textContent = `${getWinner}`;
        scoreCount(getWinner);
        displayScore(playerCount, computerCount, tieCount);
        if (playerCount + computerCount + tieCount === 5) {
            setTimeout(() => {
                gameResult.textContent = '';
                roundWinner(playerCount, computerCount);
                disableButton()
            }, 500);
        }
    }, 1000)   
});


const paperButton = document.querySelector('#Paper');
paperButton.addEventListener('click', () => {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    const getWinner = playerRound(playerSelection, computerSelection);
    welcomeElement.style.display = 'none';
    setTimeout(() => {
        gameResult.textContent = `${getWinner}`;
        scoreCount(getWinner);
        displayScore(playerCount, computerCount, tieCount);
        if (playerCount + computerCount + tieCount === 5) {
            roundWinner(playerCount, computerCount);
        }
    }, 1000)
});

const scissorButton = document.querySelector("#Scissor");
scissorButton.addEventListener('click', () => {
    const playerSelection = "Scissor";
    const computerSelection = getComputerChoice();
    const getWinner = playerRound(playerSelection, computerSelection);
    welcomeElement.style.display = 'none';
    setTimeout(() => {
        gameResult.textContent = `${getWinner}`;
        scoreCount(getWinner);
        displayScore(playerCount, computerCount, tieCount);
        if (playerCount + computerCount + tieCount === 5) {
            roundWinner(playerCount, computerCount);
        }
    }, 1000)
});

const newGameButton = document.querySelector(".newGame");
newGameButton.addEventListener('click', () => {
        playerCount = 0;
        computerCount = 0;
        tieCount = 0;
        displayScore(playerCount, computerCount, tieCount);
        playerCountElement.textContent = "0";
        computerCountElement.textContent = "0";
        tieCountElement.textContent = "0";
        textDisplayElement.textContent = "";
        gameResult.textContent = ""
        enableButton();
})

function scoreCount(getWinner){

        if (getWinner === "You Win! Rock beat Scissor!" || getWinner === "You Win! Paper beat Rock!" || getWinner === "You Win! Scissor beat Paper!")  { 
            playerCount += 1;
        }
        else if (getWinner === "It's a tie!") {
            tieCount += 1;
        }
        else {
            computerCount += 1;
        }
    }

function roundWinner(playerCount, computerCount) {
    if (playerCount > computerCount) {
        textDisplayElement.textContent = "Congratulations! You Win the Match";     
    }
    else if (playerCount === computerCount) {
        textDisplayElement.textContent = " It's tie for this match";
    }
    else if (playerCount <computerCount) {
        textDisplayElement.textContent = " Unfortunately You Lose";
    }
}
function enableButton (){
    rockButtonElement.disabled = false;
    paperButtonElement.disabled = false;
    scissorButtonElement.disabled = false;
}

function disableButton (){
    rockButtonElement.disabled = true;
    paperButtonElement.disabled = true;
    scissorButtonElement.disabled = true;
}


