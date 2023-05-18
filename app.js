const playerOneName = document.querySelector(".plays-first");
const playerTwoName = document.querySelector(".plays-second");
let upperOne = playerOneName.value.toUpperCase();
const players = function (name, marker) {
  return { name, marker };
};

const player1 = players(playerOneName.value, "X");
const player2 = players(playerTwoName.value, "O");

const winnerOne = document.querySelector(".winner-one");
const winnerTwo = document.querySelector(".winner-two");
const draw = document.querySelector(".draw");
const reset = document.querySelector(".reset");
const pName = document.querySelector(".p-name");
const closeM = document.querySelector(".close");
const submitBtn = document.querySelector(".play-btn");
const modal = document.querySelector("#plays-first");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine ");
const content = document.querySelector("#myContent");
const oneDisplay = document.querySelector(".score-one");
const twoDisplay = document.querySelector(".score-two");
const drawDisplay = document.querySelector(".score-draw");
const roundOneWinner = document.querySelector('.round-one')
const roundTwoWinner = document.querySelector('.round-two')
const drawWinner = document.querySelector('.round-three')
const playAgain = document.querySelector('.play-again')


let oneCounter = 0;
let twoCounter = 0;
let drawCounter = 0;

function openFirstPlayer() {
  const modal = document.querySelector("#plays-first");
  modal.style.display = "block";
  modal.classList.add("fade-in");
}

closeM.addEventListener("click", function () {
  closeModal();
});

function closeModal() {
  const modal = document.querySelector("#plays-first");
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(function () {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300);
}

function clearName() {
  playerOneName.value = "";
  playerTwoName.value = "";
}

reset.addEventListener("click", function () {


location.reload();

});

const boxes = document.querySelectorAll(".gamebar");

function clearBoxes() {
  boxes.forEach(function (box) {
    box.textContent = "";
    currentTurn = 1;
  });
}
let displayButton = 1;
let submitted = 1;
submitBtn.addEventListener("click", function () {

  submitted = 2;
  const playerOneInput = playerOneName.value;
  const playerTwoInput = playerTwoName.value;
  draw.style.display = "flex";
  const gapValue = "10px";
  drawDisplay.textContent = drawCounter;
  draw.style.gap = gapValue;

  winnerOne.textContent =
    playerOneName.value.toUpperCase() + " : " + oneCounter;
  winnerTwo.textContent =
    playerTwoName.value.toUpperCase() + " : " + twoCounter;
  if (playerOneInput !== "" && playerTwoInput !== "") {
    openFirstPlayer();
    pName.textContent = playerOneInput.toUpperCase() + " STARTS AS X!!";
  } else {
    openFirstPlayer();
    pName.textContent = "PLEASE FILL THE NAME BARS!!!";
  }
});

let currentTurn = 1;

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (playerOneName.value === "" || playerTwoName.value === "") {
      openFirstPlayer();
      pName.textContent = "PLEASE FILL THE NAME BARS!!!";
    } else if (submitted === 1) {
      openFirstPlayer();
      pName.textContent = "Please Submit Your names!!!";
    } else if (box.textContent === "") {
      if (currentTurn === 1) {
        box.textContent = player1.marker;

        currentTurn = 2;
      } else if (currentTurn === 2) {
        box.textContent = player2.marker;
        currentTurn = 1;
      } else if (currentTurn === 2) {
        box.style.color = "white";
      
      }
      
      gameRound();
    } else {
      alert("Please select an empty box");
    }
  });
});

function updateTwo() {
  twoCounter++;
  winnerTwo.textContent =
    playerTwoName.value.toUpperCase() + " : " + twoCounter;
  currentTurn = 1;
}

function updateDraw() {
  drawCounter++;
  drawDisplay.textContent = drawCounter;
  currentTurn = 1;
}
function roundCheck(){
 if (oneCounter === 3){
    pName.textContent = playerOneName.value.toUpperCase() + " WINS THIS ROUND"
    pName.style.color = "#4ade80"
    playAgain.style.display = "block"
  

  }
  else if (twoCounter === 3){
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS THIS ROUND "
    pName.style.color = "#4ade80"
    
    playAgain.style.display = "block"

  }
  else if ( drawCounter === 3){
    pName.textContent = "THIS ROUND ENDS AS A DRAW"
    pName.style.color = "#3b82f6"
    playAgain.style.display = "block"

    
  }
  else if (displayButton === 2){
    playAgain.style.display = "none"
  }
}

function gameRound() {
  if (
    one.textContent == player1.marker &&
    two.textContent == player1.marker &&
    three.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    one.textContent == player1.marker &&
    four.textContent == player1.marker &&
    seven.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    one.textContent == player1.marker &&
    five.textContent == player1.marker &&
    nine.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    two.textContent == player1.marker &&
    five.textContent == player1.marker &&
    eight.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    three.textContent == player1.marker &&
    five.textContent == player1.marker &&
    seven.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    four.textContent == player1.marker &&
    five.textContent == player1.marker &&
    six.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    three.textContent == player1.marker &&
    six.textContent == player1.marker &&
    nine.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    seven.textContent == player1.marker &&
    eight.textContent == player1.marker &&
    nine.textContent == player1.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerOneName.value.toUpperCase() + " WINS!";
    oneCounter++;
    winnerOne.textContent =
      playerOneName.value.toUpperCase() + " : " + oneCounter;
    clearBoxes();
  } else if (
    one.textContent == player2.marker &&
    two.textContent == player2.marker &&
    three.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();

    clearBoxes();
  } else if (
    one.textContent == player2.marker &&
    four.textContent == player2.marker &&
    seven.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();
    clearBoxes();
  } else if (
    one.textContent == player2.marker &&
    five.textContent == player2.marker &&
    nine.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();
    clearBoxes();
  } else if (
    two.textContent == player2.marker &&
    five.textContent == player2.marker &&
    eight.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();
    clearBoxes();
  } else if (
    three.textContent == player2.marker &&
    five.textContent == player2.marker &&
    seven.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();
    clearBoxes();
  } else if (
    four.textContent == player2.marker &&
    five.textContent == player2.marker &&
    six.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();
    clearBoxes();
  } else if (
    three.textContent == player2.marker &&
    six.textContent == player2.marker &&
    nine.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();
    clearBoxes();
  } else if (
    seven.textContent == player2.marker &&
    eight.textContent == player2.marker &&
    nine.textContent == player2.marker
  ) {
    openFirstPlayer();
    pName.textContent = playerTwoName.value.toUpperCase() + " WINS!";
    updateTwo();
    clearBoxes();
  } else if (
    one.textContent != "" &&
    two.textContent != "" &&
    three.textContent != "" &&
    four.textContent != "" &&
    five.textContent != "" &&
    six.textContent != "" &&
    seven.textContent != "" &&
    eight.textContent != "" &&
    nine.textContent != ""
  ) {
    openFirstPlayer();
    pName.textContent = "ITS A DRAW!!";
    updateDraw();
    clearBoxes();
  }
  roundCheck();
}

window.onload = function () {
  clearName();
  clearBoxes();
  submitted = 1;
  winnerOne.textContent = "";
  winnerTwo.textContent = "";
};
