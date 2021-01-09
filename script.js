let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
   return Math.floor(Math.random() * 10) 
};

console.log(generateTarget());

function compareGuesses(human, computer, number) {

  if((number-human) <= (number-computer)) {
       return true;
      } else {
       return false;
  } };

console.log(compareGuesses());

