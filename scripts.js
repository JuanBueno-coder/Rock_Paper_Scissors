console.log('Hello world');
/*Juego se compone de:
seleccion del ordenador
    seleccionar uno de los tres movimientos posibles
seleccion del player
ver quien gana
dar ganador
*/



function getComputerChoice() {
  
  let election = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (election == 1) return 'paper';

  if (election == 2) return 'rock';

  if (election == 3) return 'scissors';
}
function playerMove(){
  return prompt().toLowerCase();
}
function playRound() {
  let playerSelection = playerMove();
  let computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    console.log("Tie");
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    console.log("You win");
  } else {
    console.log("You lose");
  }
}



function play() {
  playRound()
  playRound()
  playRound()
  playRound()
  playRound()
};
play();


