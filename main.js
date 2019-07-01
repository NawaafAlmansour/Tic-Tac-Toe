var playBord;
const humanPlayer =  '<i class="far fa-circle a-circle">';
const humanPlayer2 = '<i class="fas fa-times x-icon"></i>';
const robot = '<i class="fas fa-times x-icon"></i>';
let value ;
let losePlayer;
const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],
  [1,4,7],[2,5,8],[0,4,8],[6,4,2]
]
document.getElementsByTagName('audio')[0].volume = 0.3;
var audio = document.getElementById("clickSound");
let comp = 1;
let b =0;
const cells = document.querySelectorAll('.square');
console.log(cells);
let n ;


startGame();


function gameMode(mode){
 document.querySelector(".optionPlay").style.display="none";
 console.log(mode);
  if (mode == "twoPlayer") {
         comp = 0;
         n =0;
   } else if (mode == "easyMode") {
    comp = 1;
    value = 0;
  } else if ( mode == "hardMode" ){
    comp = 1;
    value = 1;

  }
  }
//start Game
function startGame(){
  n = n + 1;
  console.log(n);
  document.querySelector(".endgame").style.display="none";
  document.querySelector(".optionPlay").style.display="block";
  playBord = [0,1,2,3,4,5,6,7,8];
  for(var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
  }
}


function turnClick(sq){
if (comp == 0) {
  if(!checkWin(playBord, humanPlayer) && !checkTie()){
  if (b == 0) {
  turn(sq.target.id, humanPlayer);
  b = 1;
}else{
       turn(sq.target.id, humanPlayer2);
       b = 0;
     }
   }
}else {
  if(typeof playBord[sq.target.id]== 'number'){
       turn(sq.target.id, humanPlayer);
      if(!checkWin(playBord, humanPlayer) && !checkTie()){
            turn(bestSpot(),robot);
        }
  }
}

}


function turn(sqId , player){
  playBord[sqId] = player;
  audio.play();
  document.getElementById(sqId).innerHTML = player;
  let gameWon = checkWin(playBord, player)
  if (gameWon) gameOver(gameWon);
}


function checkWin(bord , player) {
        let plays = bord.reduce((a,e,i) =>
            (e === player) ? a.concat(i) : a,[]);
       let gameWon = null;
       for (let [index , win] of winCombos.entries()) {
            if(win.every(elem => plays.indexOf(elem) > -1)) {
               gameWon = {index: index, player: player};
              break;
            }
       }
       return gameWon;
}

function gameOver(gameWon) {
      for(let index of winCombos[gameWon.index]){
          document.getElementById(index).style.backgroundColor =
                 gameWon.player == humanPlayer ? "yellow" : "#d60f74";
      }
      for (var i = 0; i < cells.length; i++) {
          cells[i].removeEventListener('click',turnClick, false);
      }
      declareWinner(gameWon.player == humanPlayer ? "You win!" : "You lose.");;
}


function declareWinner(massage){
        document.querySelector(".endgame").style.display = "block";
        document.querySelector(".endgame .text").innerText= massage;
}

function emptySquares() {
        return playBord.filter(s => typeof s == 'number');
}


function bestSpot() {
     return minimax(playBord, robot).index;

}



function checkTie() {
  if ( emptySquares().length == 0) {
       for (var i = 0; i < cells.length; i++) {
           cells[i].style.backgroundColor = '#81899B';
            cells[i].removeEventListener('click',turnClick, false);
       }
       declareWinner("Tie Game!");
       return true;
  }
  return false;
}


function minimax(newBoard, player) {
  var availSpots = emptySquares();
if(value == 0){
losePlayer = player;
}else {
  losePlayer = humanPlayer;
}
if(checkWin(newBoard, losePlayer)){
  return {score: -10 };
 	} else if (checkWin(newBoard, robot)) {
  return {score: 10};
} else if(availSpots.length === 0){
  return {score: 0};
}
var moves = [];
for (var i = 0; i < availSpots.length; i++) {
  var move = {};
  move.index = newBoard[availSpots[i]];
  newBoard[availSpots[i]] = player;

  if (player == robot) {
    var result = minimax(newBoard, humanPlayer);
    move.score = result.score;
  } else {
    var result = minimax(newBoard, robot);
    move.score = result.score;
  }
    newBoard[availSpots[i]] = move.index;

     moves.push(move);
}
 var bestMove;
 if(player === robot){
   var bestScore = -10000;
   for (var i = 0; i < moves.length; i++) {
     if(moves[i].score > bestScore){
       bestScore = moves[i].score;
       bestMove =i;
     }
   }
 }else{
   var bestScore = 10000;
   for (var i = 0; i < moves.length; i++) {
     if(moves[i].score < bestScore){
       bestScore = moves[i].score;
       bestMove =i;
     }
   }
 }

 return moves[bestMove];
}


function bannerFun(inpit) {
  if (inpit == "Player1Name") {
  document.querySelector("#Player1Name").style.display="none";
  document.querySelector("#Player1").style.display="block";
}else {
  document.querySelector("#Player2Name").style.display="none";
  document.querySelector("#Player2").style.display="block";
}
}

function keyCode(event,inpit ) {
  var x = event.keyCode;
  if (x == 13) {
    if (inpit == "Player1") {
    var text = document.getElementById("Player1").value;
    document.getElementById("Player1Name").innerHTML = text;
    document.querySelector("#Player1Name").style.display="block";
  document.querySelector("#Player1").style.display="none";
}else {
  var text = document.getElementById("Player2").value;
  document.getElementById("Player2Name").innerHTML = text;
  document.querySelector("#Player2Name").style.display="block";
document.querySelector("#Player2").style.display="none";
}
}

}

// https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/
