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
function game(){
    let askUser = parseInt(prompt("How many round do you wish to play?: "));
    let getWin = 0;
    let getTie = 0;
    let getLose = 0;
    for (let i = 0; i < askUser; i++) {
        const playerSelection = prompt("Choose: Rock, Paper or Scissor");
        const computerSelection = getComputerChoice();
        const getWinner = playerRound(playerSelection, computerSelection);
        console.log(getWinner);
        if (getWinner === "You Win! Rock beat Scissor!" || getWinner === "You Win! Paper beat Rock!" || getWinner === "You Win! Scissor beat Paper!")  { 
            getWin += 1;
        }
        else if (getWinner === "It's a tie!") {
            getTie += 1;
        }
        else {
            getLose += 1;
        }
    }
    if (getWin > getLose) {
        console.log("Congratulations! You Win the Match");
        console.log (`Win : ${getWin} Loss : ${getLose} Tie : ${getTie}`);
    }
    else if (getWin === getLose) {
        console.log(" It's tie for this match");
        console.log(`Win : ${getWin} Loss : ${getLose} Tie : ${getTie}`);
    }
    else if (getWin < getLose) {
        console.log(" Unfortunately You Lose");
        console.log(`Win : ${getWin} Loss : ${getLose} Tie : ${getTie}`);
    }
    return "Game Over";

}
console.log(game());