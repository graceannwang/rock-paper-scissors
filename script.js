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
        return "tie";
    }

    const playerLoses = ((playerSelection == "rock") && (computerSelection == "paper")) ||
                        ((playerSelection == "paper") && (computerSelection == "scissors")) ||
                        ((playerSelection == "scissors") && (computerSelection == "rock"));
    
    if(playerLoses) {
        return "computer";
    }

    return "player";
}

/* game: Plays 5 rounds of rock paper scissors. Console logs the results from each
    game, and the final winner */
function game() {
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++) {
        const compPlay = computerPlay();
        const playerPlay = prompt("Choose: rock, paper, or scissors");
        const winner = playRound(playerPlay, compPlay);
        if(winner == "player") {
            playerScore++;
        } else if(winner == "computer") {
            compScore++;
        } else {
            playerScore++;
            compScore++;
        }

        let winStr = winner + " wins!";
        if(winner == "tie") {
            winStr = "tie ";
        }
        console.log(winStr + " Your play: " + playerPlay + 
            ", Computer's play: " + compPlay);
    }

    console.log("TOTAL SCORES -- player: " + playerScore + " computer: " + compScore);
    if(playerScore > compScore) {
        console.log("YOU WIN!");
    } else if(compScore > playerScore) {
        console.log("YOU LOSE");
    } else {
        console.log("TIE");
    }

}

game();