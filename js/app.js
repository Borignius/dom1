var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

function createGame(gameboard){
  board.forEach(function(thisValue, i) {
    var butt = document.createElement("div")
    var gameboard = document.getElementById("gameboard")
    butt.id = i
    if (i === 0 || i === 1 || i === 3 || i === 4) {
     butt.setAttribute('class', 'square b-border r-border')
   }
   else if ( i === 2 || i === 5){
     butt.setAttribute('class', 'square b-border')
   }
   else if (i < 8){
     butt.setAttribute('class', 'square r-border')
   }
   else{
     butt.setAttribute('class', 'square')
   }
   gameboard.appendChild(butt)
   addClickListener(butt)
  })
}

function makeMove(squElm, i) {
  if (currentPlayer === "X"){
    squElm.innerText = "X"
  } else {
    squElm.innerText = "O"
  }
  board[i] = currentPlayer
}

function displayMessage(msg) {
  var msgVal = document.getElementsByClassName('message')[0]
  if (msg == null){
    msgVal.innerText = 'Current Player: ' + currentPlayer
  }
}

function changeMessage() {
  var msgVal = document.getElementsByClassName('message')[0]
  msgVal.setAttribute('class', 'end-message')
  // console.log(msgVale)
}

createGame();
