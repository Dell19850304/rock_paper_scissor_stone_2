
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

} ));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3 ) + 1;

    switch(randNum){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
            
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw !";
    }
    else if(computer == "rock" && player == "paper"){
        return "You win!";
    }
    else if(computer == "paper" && player == "scissors"){
        return "You win";
    }
    else if(computer == "scissors" && player == "rock"){
        return "You win!" 
    }
    else{
        return "You lose"
    }
}



