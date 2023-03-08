console.log("hello world")

 userScore = 0
 computerScore = 0

const values = ['Rock', 'Paper', 'Scissors'] //Values the computer can choose from 
function getComputerChoice(choice){
    const randomIndex = Math.floor(Math.random() * values.length) //Math Random picks a number between 0 and 1 (including zero) we multiply this by the number of clues the computer chan choose from to create the correct range. Math Floor then rounds this down to an integer.
    return values[randomIndex]// This returns a position in the list of values, i.e 1 to 3
}
ComputerChoice = getComputerChoice(); //Creates a variable using the name and position on the l
ComputerChoice = ComputerChoice.toLowerCase();
console.log(ComputerChoice)

PlayerChoice = prompt("Rock, Paper or Scissors?") // Brings up the popup box
PlayerChoice = PlayerChoice.toLowerCase();
    

function playRound(PlayerChoice, ComputerChoice){
    //Comparing player and computer choices to determine winner
    if (PlayerChoice ===  ComputerChoice) {
        return 'Draw!';
    } else if (
        (PlayerChoice === 'rock' && ComputerChoice === 'paper') || 
        (PlayerChoice === 'scissors' && ComputerChoice === 'rock')||
        (PlayerChoice === 'paper' && ComputerChoice === 'scissors')
    ) {
        computerScore++;
        return 'You lose! ${ComputerChoice} beats ${PlayerChoice}.';
    } else {
        userScore++;
        return 'You win! ${PlayerChoice} beats ${ComputerChoice}.';
    }
}

console.log(playRound(PlayerChoice, ComputerChoice));