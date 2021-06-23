var buttons=document.getElementsByClassName("button");

for (var button of buttons){
  button.addEventListener("click", showPlayerEmoji);
}

function showPlayerEmoji(event){
  var playerEmoji=document.getElementById("playerEmoji");
  var selectedSpace=document.getElementById(event.target.id);
  selectedSpace.style.backgroundImage="url(" + playerEmoji.src + ")";
  selectedSpace.style.backgroundColor="#860701";
  selectedSpace.style.backgroundSize="cover";
  
  if (playerEmoji.src.includes("/Resources/Scorpion.png")){
    playerEmoji.src="./Resources/Mileena.png";
  } else {
    playerEmoji.src="./Resources/Scorpion.png";
  }
}

function definePlayer(){
}
