console.log("hello world")

const userScore = 0
const computerScore = 0

const values = ['Rock', 'Paper', 'Scissors'] //Values the computer can choose from 
function getComputerChoice(choice){
    const randomIndex = Math.floor(Math.random() * values.length) //Math Random picks a number between 0 and 1 (including zero) we multiply this by the number of clues the computer chan choose from to create the correct range. Math Floor then rounds this down to an integer.
    return values[randomIndex]// This returns a position in the list of values, i.e 1 to 3
}
let ComputerChoice = getComputerChoice(); //Creates a variable using the name and position on the l
console.log(ComputerChoice)

let PlayerChoice = prompt("Rock, Paper or Scissors?") // Brings up the popup box
console.log(PlayerChoice)    

//Comparing player and computer choices to determine winner
if (PlayerChoice ===  ComputerChoice) {
    result= 'Draw!'
} else if (PlayerChoice === 'Rock' && ComputerChoice === 'Paper') {
    result= 'You lose!'
} else if (PlayerChoice === 'Scissors' && ComputerChoice === 'Rock') {
    result = 'You lose!'
} else if (PlayerChoice === 'Paper' && ComputerChoice === 'Scissors') {
    result = 'You lose!'
} else {
    result = 'You win!'
}


console.log(result);

 function playRound(ComputerChoice, PlayerChoice){

 }

 console.log(playRound(PlayerChoice, ComputerChoice));