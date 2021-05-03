
// Write your code below:

  let humanScore = 0;
  let computerScore = 0;
  let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNum) {

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
}

const updateScore = (theWinner) => {
  if (theWinner === "human") {
    (humanScore++);
  }
  else if (theWinner === "computer") {
    (computerScore++);
  }
}

const advanceRound = () => {
  (currentRoundNumber++);
}
