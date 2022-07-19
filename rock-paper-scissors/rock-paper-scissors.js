

//variables
let playerChoice;
let computerChoice;
let playerSelected;

//get body element
const body = document.querySelector("body");
//get rock,paper,scissor buttons as an array
const buttons = document.querySelectorAll("button");
//get playerChoice element to show player which weapon they chose
const playerChoiceText = document.querySelector(".playerChoice");
//get computerChoice element to show player 
const computerChoiceText = document.querySelector(".computerChoice");

//@param string playerChoice
//sets text of playerChoiceTest accordingly
function getPlayerChoiceText(playerChoice){
    switch(playerChoice){
        case "rock":
            playerChoiceText.textContent = "You chose rock!";
            break;
        case "paper":
            playerChoiceText.textContent = "You chose paper!";
            break
        case "scissors":
            playerChoiceText.textContent = "You chose scissors!";
            break;
    }
}

function getComputerChoiceText(computerChoice){
    switch(computerChoice){
        case "rock":
            computerChoiceText.textContent = "The computer chose rock!";
            break;
        case "paper":
            computerChoiceText.textContent = "The computer chose paper!";
            break
        case "scissors":
            computerChoiceText.textContent = "The computer chose scissors!";
            break;
    }
}

function getComputerChoice(){
    var choice = Math.floor(Math.random()*3);
    computerChoice = buttons[choice].id;
}


//when rock/paper/scissors button is clicked, save players choice,
//gets computers choice, and prints output for user.

function getRound(){
    playerSelected = false;
    buttons.forEach( (button) => {
            button.addEventListener('click', (event) => {
                    playerChoice = button.id;
                    getPlayerChoiceText(playerChoice);
                    var choice = Math.floor(Math.random()*3);
                    computerChoice = buttons[choice].id;
                    getComputerChoiceText(computerChoice);
                }
            )
        }   
    )
}




body.addEventListener('click', getRound());

//getComputerChoice();
// getComputerChoiceText(computerChoice);






