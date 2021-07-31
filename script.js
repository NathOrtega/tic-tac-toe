const buttons=Array.from(document.getElementsByClassName("button"));
const titleToHide=document.getElementById("title1");
const playerEmoji=document.getElementById("playerEmoji");
const titleToChange=document.getElementById("title2");
const mobileDecorationImage=document.getElementById("mobileImage");
const restartButton=document.getElementById("restartButton");
const board=[["", "", ""],["", "", ""],["", "", ""]];
// todo: make const and move inside play
let clickedButton="";
// probably, make parameter
let someoneWins=false;
// probably, make parameter
let isTheBoardFull=false;

for (const button of buttons){
  button.addEventListener("click", play);
}

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

/**
 * TODO: Rename to getWinner,
 * this method should return the winner or undefined
 */
function checkIfSomeoneWins() {
  const scorpion="SSS", mileena="MMM";
  let mainDiagonal=""; 
  let secondaryDiagonal=board[2][0] + board[1][1] + board[0][2];
  for (let i=0; i<board.length; i++){
    let row="", column="";
    for (let j=0; j<board.length; j++){
      row+=board[i][j];
      column+=board[j][i];
      // todo: reset this value
      mainDiagonal+=board[j][j];
      // todo: replace to use [].includes
      if (row===scorpion || row===mileena){
        someoneWins=true;
        break;
      } else if (column===scorpion || column===mileena){
        someoneWins=true;
        break;
      } else if (mainDiagonal===scorpion || mainDiagonal===mileena){
        someoneWins=true;
        break;
      } else if (secondaryDiagonal===scorpion || secondaryDiagonal===mileena){
        someoneWins=true;
        break;
      }
    }
  }
}

/**
 * TODO: Split into:
 * showWinnerResult(winner S|M)
 * showTiedResult()
 */
function selectWinner(){
  if (someoneWins){
    titleToHide.style.display="none";
    playerEmoji.src=playerEmoji.src.includes("Scorpion") ? `./Resources/Scorpion.png` : `./Resources/Mileena.png`;
    titleToChange.innerText="wins!"
  } else if (!someoneWins && isTheBoardFull) {
    titleToHide.style.display="none";
    playerEmoji.style.display="none";
    titleToChange.innerText="You're both losers!";
    titleToChange.style.textAlign="center";
  }
}

function play(event) {
  clickedButton=document.getElementById(event.target.id);
  clickedButton.value=playerEmoji.src.includes("Scorpion") ? "S" : "M";
  clickedButton.style.backgroundImage=`url(${playerEmoji.src})`;
  clickedButton.style.backgroundSize="cover";
  clickedButton.style.backgroundColor="#860701";
  clickedButton.removeEventListener("click", play);

  updateBoard();
  // todo: make local const
  isTheBoardFull=buttons.every(e => e.value!==undefined);
  // const winner = getWinner() // S|M|undefined
  checkIfSomeoneWins();

  selectWinner();

  showRestartButtonIfNecessary();

  if(!someoneWins){
    playerEmoji.src=playerEmoji.src.includes("Scorpion") ? `./Resources/Mileena.png` : `./Resources/Scorpion.png`;
  }
}

restartButton.addEventListener("click", () => {
  window.location.reload();
});

// TOOD: rename to showRestartButton
// remove conditional.
function showRestartButtonIfNecessary() {
  if (someoneWins || isTheBoardFull){
    restartButton.style.display="inline";
    mobileDecorationImage.style.marginTop="0";

    for (const button of buttons){
      button.removeEventListener("click", play);
    }
  }
}