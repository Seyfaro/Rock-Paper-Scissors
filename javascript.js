console.log("hello world");

 let userScore = 0;
 let computerScore = 0;

 let scoreElementOutput = document.getElementById('myOutput');


 const image1 = document.getElementById('rock');
 image1.addEventListener('click', handleClickRock);
 
 const image2 = document.getElementById('paper');
 image2.addEventListener('click', handleClickPaper);
 
 const image3 = document.getElementById('scissors');
 image3.addEventListener('click', handleClickScissors);
 


 function handleClickRock() {
    PlayerChoice = 'rock';
    game();
  }
  
  function handleClickPaper() {
    PlayerChoice = 'paper';
    game();
    // do something with myVariable2
  }
  
  function handleClickScissors() {
    PlayerChoice = 'scissors';
    game();
    // do something with myVariable2
  }


  

const values = ['rock', 'paper', 'scissors'] //Values the computer can choose from 
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * values.length) //Math Random picks a number between 0 and 1 (including zero) we multiply this by the number of clues the computer chan choose from to create the correct range. Math Floor then rounds this down to an integer.
    return values[randomIndex]// This returns a position in the list of values, i.e 1 to 3
}
ComputerChoice = getComputerChoice(); //Creates a variable using the name and position on the l


    

function playRound(PlayerChoice, ComputerChoice){
    console.log(PlayerChoice);
    console.log(ComputerChoice);
    //Comparing player and computer choices to determine winner
    if (PlayerChoice ===  ComputerChoice) {
        return 'Draw!';
    } else if (
        (PlayerChoice === 'rock' && ComputerChoice === 'paper') || 
        (PlayerChoice === 'scissors' && ComputerChoice === 'rock')||
        (PlayerChoice === 'paper' && ComputerChoice === 'scissors')
    ) {
        computerScore++;
        //Remember to use Option Key + tilde ~ to include variables in a string!
        return `You lose! ${ComputerChoice} beats ${PlayerChoice}.`;
    } else {
        userScore++;
        return scoreElementOutput.textContent = `You win! ${PlayerChoice} beats ${ComputerChoice}.`;
    }
    
    
}



function game() {
    
    // 5 rounds of the game
    //for (let i = 0; i < 5;  i++) {
        //let PlayerChoice = prompt("Rock, Paper or Scissors?"); // Brings up the popup box
        //Plays the round using the getComputerChoice result,which is called instead of being stored as a variable so that it is different each time
        let result = playRound(PlayerChoice, getComputerChoice());

        console.log(result);
        
         //DOM to HTML file to display score 
    let scoreElementPlayer = document.getElementById('playerScoreElement');
    scoreElementPlayer.textContent = `You : ${userScore}`;
    
    let scoreElementComputer = document.getElementById('computerScoreElement');
    scoreElementComputer.textContent = `Computer : ${computerScore}`;


    //Winner

}



console.log(computerScore)



