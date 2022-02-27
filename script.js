/* computerPlay
OUT: (String) what the computer plays */
function computerPlay(){
    const n = Math.floor(Math.random() * 10);
    if(n >= 7){
        return "rock";
    } else if(n >= 4){
        return "paper";
    } else {
        return "scissors";
    }
}

/* playRound
IN: 
    playerSelection: (String) the player's selection
    computerSelection: (String) the computer's selection
OUT: (String) description of who wins, who loses */
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const resultStr = "computer guessed " + computerSelection + " --> ";

    if(playerSelection == computerSelection) {
        return resultStr + "tie";
    }

    const playerLoses = ((playerSelection == "rock") && (computerSelection == "paper")) ||
                        ((playerSelection == "paper") && (computerSelection == "scissors")) ||
                        ((playerSelection == "scissors") && (computerSelection == "rock"));
    
    if(playerLoses) {
        return resultStr + "player loses, computer wins";
    }

    return resultStr + "player wins, computer loses";
}

console.log(playRound("scissors", computerPlay()));