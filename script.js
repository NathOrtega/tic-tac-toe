const buttons=Array.from(document.getElementsByClassName("button"));
const titleToHide=document.getElementById("title1");
const playerEmoji=document.getElementById("playerEmoji");
const titleToChange=document.getElementById("title2");
const mobileDecorationImage=document.getElementById("mobileImage");
const restartButton=document.getElementById("restartButton");
const board=[["", "", ""],["", "", ""],["", "", ""]];

for (const button of buttons){
  button.addEventListener("click", play);
}

restartButton.addEventListener("click", () => {
  window.location.reload();
});

function updateBoard() {
  board[0][0]=buttons[0].value;
  board[0][1]=buttons[1].value;
  board[0][2]=buttons[2].value;

  board[1][0]=buttons[3].value;
  board[1][1]=buttons[4].value;
  board[1][2]=buttons[5].value;

  board[2][0]=buttons[6].value;
  board[2][1]=buttons[7].value;  
  board[2][2]=buttons[8].value;
}

function getWinner() {
  const scorpion="SSS", mileena="MMM";
  let secondaryDiagonal=board[2][0] + board[1][1] + board[0][2];
  for (let i=0; i<board.length; i++){
    let row="", column="", mainDiagonal="";
    for (let j=0; j<board.length; j++){
      row+=board[i][j];
      column+=board[j][i];
      mainDiagonal+=board[j][j];
      const boardArray=[row, column, mainDiagonal, secondaryDiagonal];
      if (boardArray.includes(scorpion)){
        return "S";
      } else if (boardArray.includes(mileena)){
        return "M";
      }
    }
  }
}

function showWinnerResult(winner){
  titleToHide.style.display="none";
  playerEmoji.src=winner==="S" ? `./Resources/Scorpion.png` : `./Resources/Mileena.png`;
  titleToChange.innerText="wins!"
}

function showTiedResult(){
  titleToHide.style.display="none";
  playerEmoji.style.display="none";
  titleToChange.innerText="You're both losers!";
  titleToChange.style.textAlign="center";
}

function disableBoardButtons(){
  for (const button of buttons){
    button.removeEventListener("click", play);
  }
}

function showRestartButton() {
  restartButton.style.display="inline";
  mobileDecorationImage.style.marginTop="0";
}

function play(event) {
  const clickedButton=document.getElementById(event.target.id);
  clickedButton.value=playerEmoji.src.includes("Scorpion") ? "S" : "M";
  clickedButton.style.backgroundImage=`url(${playerEmoji.src})`;
  clickedButton.style.backgroundSize="cover";
  clickedButton.style.backgroundColor="#860701";
  clickedButton.removeEventListener("click", play);
  
  updateBoard();
  
  const isTheBoardFull=buttons.every(e => e.value!==undefined);
  const winner=getWinner();

  if (winner!==undefined){
    showWinnerResult(winner);
    disableBoardButtons();
    showRestartButton();
  } else if (isTheBoardFull){
    showTiedResult();
    disableBoardButtons();
    showRestartButton();
  } else {
    playerEmoji.src=playerEmoji.src.includes("Scorpion") ? `./Resources/Mileena.png` : `./Resources/Scorpion.png`;
  }
}