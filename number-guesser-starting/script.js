let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Randomize the target
const generateTarget = function(){
    return Math.floor(Math.random() * 9);
};

//console.log(generateTarget());

//Compare human and computer guesses with the secret target
const compareGuesses = function(humanGuess,computerGuess,secretTarget){
    let humanDifference = Math.abs(secretTarget - humanGuess);
    let computerDifference = Math.abs(secretTarget - computerGuess);

    if(humanDifference > computerDifference){
        return false;//computer wins

    } else if(humanDifference < computerDifference){
        return true;//human wins

    } else if(humanDifference === computerDifference){
        return true;//human wins because of rules
    }

};

//console.log(compareGuesses(1,2,2)); //Computer wins


//Used to correctly increase the winner's score after each round
const updateScore = function(string){
    if(string == 'human'){
        humanScore++;
    }
    if(string == 'computer'){
        computerScore++;
    }
};

const advanceRound = function(){
    currentRoundNumber++;
};


