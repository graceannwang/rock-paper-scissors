function computerPlay(){
    let n = Math.floor(Math.random() * 10);
    if(n >= 7){
        return "rock";
    } else if(n >= 4){
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(computerPlay());

/*
Generate a random integer between 1 - 9
If the number is 7 or greater, return rock
if the number is 4 or greater, return paper
if the number is 1 or greater, return scissors */