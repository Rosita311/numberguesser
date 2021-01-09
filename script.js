let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
   return Math.floor(Math.random() * 10) 
};

function compareGuesses(human, computer, number) {
   let humanDistance = Math.abs(human - number);
   let computerDistance = Math.abs(computer - number);
  if(humanDistance <= computerDistance) {
       return true;
      } else {
       return false;
  } 
};

function updateScore(winner) {
   if(winner === 'human') {
      humanScore++;
   } else if(winner === 'computer')
      computerScore++;
   };

function advanceRound() {
   currentRoundNumber++;
};

generateTarget();
compareGuesses();
updateScore();
advanceRound();
