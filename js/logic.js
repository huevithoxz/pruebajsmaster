const ROCK = "rock";

const PAPER = "paper";

const SCISSORS = "scissors";

const WIN = 0;

const TIE = 1;

const LOST = 2;

var points = 0; 
var rounds = 0; 
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

const ranked = document.getElementById("reanked");
const round = document.getElementById("round");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});
paperBtn.addEventListener("click", () => {
  play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function calMachineOption() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

function play(userOption) {


  
 
  userImg.src = "style/img/" + userOption + ".svg";
  resultText.innerHTML = "Escogiendo";
  const interval = setInterval(function () {const machineOption = calMachineOption();
    machineImg.src = "style/img/" + machineOption + ".svg";}, 100);
  setTimeout(function () {
    clearInterval(interval)
    const machineOption = calMachineOption();
    const result = calcResult(userOption, machineOption);
    
    machineImg.src = "style/img/" + machineOption + ".svg";

    switch (result) {
      
      case TIE:
        resultText.innerHTML = "Has Empatado !";

        break;
      case WIN:
       
        resultText.innerHTML = "GANASTE";
        console.log(points)
        suma = points + 100
        document.getElementById("ranked").innerHTML = "Puntaje: "  + suma;
        
        break;
      case LOST:
     
        resultText.innerHTML = "PERDISTE";
        resta = points - 30
        document.getElementById("ranked").innerHTML = "Puntaje: "  + resta;
        break;
    } 
   
    updateDisplay(++rounds);
  }, 1000);
}
function calcResult(userOption, machineOption) {
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


function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("round").innerHTML = "Ronda: "+val;
}
function updatePoints(val) {
  document.getElementById("ranked").innerHTML = "Puntaje: "  +val;
}
