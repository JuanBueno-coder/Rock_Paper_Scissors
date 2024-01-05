let playerSelection;
let counterWinsPlayer=0;
let counterWinsComputer=0;

function getComputerChoice() {
  let election = Math.floor(Math.random() * 3) + 1;
  if (election === 1) return 'paper';
  if (election === 2) return 'rock';
  if (election === 3) return 'scissors';
}

function playerMove(selection) {
  playerSelection = selection;
}

function playRound() {
  let computerSelection = getComputerChoice();
  let result =document.getElementById("resultText");
  if (playerSelection === computerSelection) {
    const para = document.createElement("p");
    const node = document.createTextNode("Tie");
    para.appendChild(node);
    result.appendChild(para);
    console.log("Tie");
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    const para = document.createElement("p");
    const node = document.createTextNode("You win");
    para.appendChild(node);
    result.appendChild(para);
    counterWinsPlayer++;
  } else {
    const para = document.createElement("p");
    const node = document.createTextNode("You lose");
    para.appendChild(node);
    result.appendChild(para);
    counterWinsComputer++;
  }
  if(counterWinsPlayer==5){
    const para = document.createElement("p");
    const node = document.createTextNode("You win the game");
    para.appendChild(node);
    result.appendChild(para);
}else if(counterWinsComputer==5){
    const para = document.createElement("p");
    const node = document.createTextNode("You lose the game");
    para.appendChild(node);
    result.appendChild(para);
}
}

function play() {
  playRound();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("rockBtn").addEventListener("click", function() {
    playerMove('rock');
    playRound();
  });

  document.getElementById("scissorsBtn").addEventListener("click", function() {
    playerMove('scissors');
    playRound();
  });

  document.getElementById("paperBtn").addEventListener("click", function() {
    playerMove('paper');
    playRound();
  });

});
