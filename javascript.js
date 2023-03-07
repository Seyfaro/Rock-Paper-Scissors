console.log("hello world")
const values = ['Rock', 'Paper', 'Scissors']
function getComputerChoice(choice){
    const randomIndex = Math.floor(Math.random() * values.length)
    return values[randomIndex]
}
let ComputerChoice = getComputerChoice();
console.log(ComputerChoice)