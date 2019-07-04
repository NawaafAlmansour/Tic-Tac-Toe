// the original board array
var playBord;
// they're Players
const humanPlayer = '<i class="far fa-circle a-circle animated tada  zoomIn jackInTheBox"></i>';
const humanPlayer2 = '<i class="fas fa-times x-icon animated tada  zoomIn jackInTheBox"></i>';
const robot = '<i class="fas fa-times x-icon animated   zoomIn jackInTheBox"></i>';
// value using in mainmax
let value;
// losePlayer using in mainmax
let losePlayer;
// winning Combinations array
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
]
//Control a background sound
document.getElementsByTagName('audio')[0].volume = 0.3;
var audio = document.getElementById("clickSound");
//change a turn Click
let comp = 1;
//change the turn for  human Player
let b = 0;
//selector all going to select each element
const cells = document.querySelectorAll('.square');
console.log(cells);
//print score
let scoreplayr1=0;
let scoreplayr2=0;
// call funtion
startGame();
// Select the game mode by clicking on the button
function gameMode(mode) {
  document.querySelector(".optionPlay").style.display = "none";
  console.log(mode);
  if (mode == "twoPlayer") {
    comp = 0;
    n = 0;
  } else if (mode == "easyMode") {
    comp = 1;
    value = 0;
  } else if (mode == "hardMode") {
    comp = 1;
    value = 1;
  }
}
//start Game Cleaning the board
function startGame() {
  document.querySelector(".endgame").style.display = "none";
  document.querySelector(".optionPlay").style.display = "block";
  playBord = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  //set the intertext to nothing
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
// Event Listener to call  turnClick function
    cells[i].addEventListener('click', turnClick, false);
  }
}

// turn Click function  Determine who has the right to play
function turnClick(playerturn) {
  if (comp == 0) {
    if (!checkWin(playBord, humanPlayer) && !checkTie()) {
      if (b == 0) {
        // turn finction Take the location of the play game and who Player
        turn(playerturn.target.id, humanPlayer);
        b = 1;
      } else{
        turn(playerturn.target.id, humanPlayer2);
        b = 0;
      }
    }
  } else {
    if (typeof playBord[playerturn.target.id] == 'number') {
      turn(playerturn.target.id, humanPlayer);
      if (!checkWin(playBord, humanPlayer) && !checkTie()) {
        turn(bestSpot(), robot);
      }
    }
  }

}

// turn function take tow parameters to scope Id and playrt
function turn(scopeId , player) {
  playBord[scopeId] = player;
  audio.play();
  document.getElementById(scopeId).innerHTML = player;
  checkTie();
  let gameWon = checkWin(playBord, player);
  if (gameWon) gameOver(gameWon);
}

// check function if the game has been won
function checkWin(board , player) {
  // find all the places on the board play then
  let plays = board.reduce((accumulator, element, i) =>
    (element === player) ? accumulator.concat(i): accumulator, []);
  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {
        index: index, player: player
      };
      break;
    }
  }
  return gameWon;
}
// function game Over Change the color of the board
// send to function display Screen what it's they  print and remove Even the div
function gameOver(gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
    gameWon.player == humanPlayer ? "#ffe552": "#d60f74";
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false);
  }
  if(gameWon.player == humanPlayer){
    displayScreen("You win !"+$('#Player1Name').text());
    scoreplayr1+=1;
    displayScore(scoreplayr1,1);
  }else if(gameWon.player == humanPlayer2){
    scoreplayr2+=1;
    displayScreen("You win !"+$('#Player2Name').text());
    displayScore(scoreplayr2,2);

  }else {
    displayScreen( "You lose :(");

  }
}

// display Screen function
function displayScreen(massage) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = massage;

}
// display Score  function
function displayScore(score,playr) {
  if (playr == 1) {
    document.querySelector("#score1").innerText = score;

  }else {
    document.querySelector("#score2").innerText = score;

  }

}


//  function  for the AI remember
function bestSpot() {
  return minimax(playBord, robot).index;

}

// function empty Squares find the first square that's not empty
function emptySquares() {
  return playBord.filter(squar => typeof squar == 'number');
}

//  function checkTie if eevery square if fill up and anobody is one
function checkTie() {
  if (emptySquares().length == 0) {
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '#81899B';
      cells[i].removeEventListener('click', turnClick, false);
    }
    displayScreen("Tie Game!");
    return true;
  }
  return false;
}

// minimax  function  AI playrt
function minimax(newBoard, player) {
  var emptyPlaces = emptySquares();
  if (value == 0) {
    losePlayer = player;
  } else {
    losePlayer = humanPlayer;
  }
  if (checkWin(newBoard, losePlayer)) {
    return {
      score: -10
    };
  } else if (checkWin(newBoard, robot)) {
    return {
      score: 10
    };
  } else if (emptyPlaces.length === 0) {
    return {
      score: 0
    };
  }
  let moves = [];
  for (let i = 0; i < emptyPlaces.length; i++) {
    let move = {};
    move.index = newBoard[emptyPlaces[i]];
    newBoard[emptyPlaces[i]] = player;

    if (player == robot) {
      let result = minimax(newBoard, humanPlayer);
      move.score = result.score;
    } else {
      let result = minimax(newBoard, robot);
      move.score = result.score;
    }
    newBoard[emptyPlaces[i]] = move.index;

    moves.push(move);
  }
  var bestMove;
  if (player === robot) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

// banner Fun  function
function bannerFun(inpit) {
  if (inpit == "Player1Name") {
    document.querySelector("#Player1Name").style.display = "none";
    document.querySelector("#Player1").style.display = "block";
  } else {
    document.querySelector("#Player2Name").style.display = "none";
    document.querySelector("#Player2").style.display = "block";
  }
}
//keyCode function
function keyCode(event, inpit) {
  var x = event.keyCode;
  if (x == 13) {
    if (inpit == "Player1") {
      var text = document.getElementById("Player1").value;
      document.getElementById("Player1Name").innerHTML = text;
      document.querySelector("#Player1Name").style.display = "block";
      document.querySelector("#Player1").style.display = "none";
    } else {
      var text = document.getElementById("Player2").value;
      document.getElementById("Player2Name").innerHTML = text;
      document.querySelector("#Player2Name").style.display = "block";
      document.querySelector("#Player2").style.display = "none";
    }
  }

}


$('#buttonR').click(function() {
  location.reload();
});

// https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/
