console.log('Hello world');
/*Juego se compone de:
seleccion del ordenador
    seleccionar uno de los tres movimientos posibles
seleccion del player
ver quien gana
dar ganador
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function getComputerChoice(){
    let election = getRandomInt(3);
    if ( election == 0){return 'paper'
       console.log('Computer has select paper');
    }
    if(election == 1){return 'rock'
       console.log('Computer has select rock');
    }
    if(election == 2){return 'scissors'
       console.log('Computer has select scissors');
    }
}
function playRound(playerSelection, computerSelection) {
if(playerSelection==computerSelection){
    return console.log("")
}
  }
const playerSelection ="rock";
const computerSelection =getComputerChoice();
console.log(computerSelection);
