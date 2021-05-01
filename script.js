let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, targetNum) => {

  const getAbsoluteDistance = (a, b) => {
    let theDistance = Math.abs(a - b);
    return theDistance;
  }

  if (getAbsoluteDistance(userGuess, targetNum) <= (getAbsoluteDistance(computerGuess, targetNum))) {
    return true;
  }

  else {
    return false;
  }


const updateScore = (theWinner) => {
  if (theWinner === "human") {
    humanScore = humanScore + 1;
  }
  else if (theWinner === "computer") {
    computerScore = computerScore + 1;
  }
}

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
}
}