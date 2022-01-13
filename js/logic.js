const ROCK = 0;

const PAPER = 1;

const SCISSORS = 2;

const WIN = 0;

const TIE = 1;

const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});
paperBtn.addEventListener("click", () => {
  play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption)
{
    const machineOption = Math.floor(Math.random() * 3);
    const result = calcResult(userOption, machineOption);

    switch(result)
    {
        case TIE : 
        alert(machineOption+"EMPATE")
        break;
        case WIN : 
        alert(machineOption+"GANASTE")
        break;
        case LOST : 
        alert(machineOption+"PERDISTE")
        break;
    }
}
function calcResult(userOption,machineOption) {

  if (userOption === machineOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return LOST;
    if (machineOption === SCISSORS) return WIN;
  } else if (userOption === PAPER) {
    if (machineOption === ROCK) return WIN;
    if (machineOption === SCISSORS) return LOST;
  } else if (userOption === SCISSORS) {
    if (machineOption === ROCK) return LOST;
    if (machineOption === PAPER) return WIN;
  }
}
