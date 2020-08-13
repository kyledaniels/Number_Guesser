let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


//Function will generate new number for user and computer to guess:

const generateTarget = ()=>{
   target = Math.floor(Math.random()*10);
   return target;
}

/*Function will determine which guess is closest to the target number.

Determines which player (human or computer) wins based on which guess is closest to the target. 
If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins.*/

const compareGuesses = (human, computer, target)=>{

    if(human===target&&computer===target){
        return 'You Win';
    }if(Math.abs(target-human)< (Math.abs(target-computer)){
        return true;
    }else{
        return false;
    }
}
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
const advanceRound = () => currentRoundNumber++;