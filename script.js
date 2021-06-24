var buttons=document.getElementsByClassName("button");
var playerEmoji=document.getElementById("playerEmoji");
var titleToHide=document.getElementById("title1");
var titleToChange=document.getElementById("title2");

for (var button of buttons){
  button.addEventListener("click", play);
}

function play(event){
  // This change the selected space into the player character
  var selectedSpace=document.getElementById(event.target.id);
  selectedSpace.style.backgroundImage="url(" + playerEmoji.src + ")";
  selectedSpace.style.backgroundColor="#860701";
  selectedSpace.style.backgroundSize="cover";
  selectedSpace.removeEventListener("click", play);
  
  // This gives each character a value
  if (playerEmoji.src.includes("/Resources/Scorpion.png")){
    selectedSpace.value=1; //Scorpion value
  } else {
    selectedSpace.value=2; //Mileena value
  }

  // This uses the value given to determinate when a player wins
  var space1=document.getElementById("one");
  var space2=document.getElementById("two");
  var space3=document.getElementById("three");
  var space4=document.getElementById("four");
  var space5=document.getElementById("five");
  var space6=document.getElementById("six");
  var space7=document.getElementById("seven");
  var space8=document.getElementById("eight");
  var space9=document.getElementById("nine");
  if (selectedSpace.id===space1.id && ((space1.value===space2.value && space1.value===space3.value) ||
  (space1.value===space4.value && space1.value===space7.value) || (space1.value==space5.value && 
  space1.value==space9.value))){
    if (space1.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space2.id && ((space2.value===space1.value && space2.value===space3.value) ||
  (space2.value===space5.value && space2.value===space8.value))){
    if (space2.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space3.id && ((space3.value===space1.value && space3.value===space2.value) ||
  (space3.value===space6.value && space3.value===space9.value) || (space3.value==space5.value && 
  space3.value==space7.value))){
    if (space3.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space4.id && ((space4.value===space1.value && space4.value===space7.value) ||
  (space4.value===space5.value && space4.value===space6.value))){
    if (space4.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space5.id && ((space5.value===space1.value && space5.value===space9.value) ||
  (space5.value===space3.value && space5.value===space7.value) || (space5.value==space2.value && 
  space5.value==space8.value) || (space5.value==space4.value && space5.value==space6.value))){
    if (space5.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space6.id && ((space6.value===space3.value && space6.value===space9.value) ||
  (space6.value===space5.value && space6.value===space4.value))){
    if (space6.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space7.id && ((space7.value===space1.value && space7.value===space4.value) ||
  (space7.value===space8.value && space7.value===space9.value) || (space7.value==space5.value && 
  space7.value==space3.value))){
    if (space7.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space8.id && ((space8.value===space7.value && space8.value===space9.value) ||
  (space8.value===space5.value && space8.value===space2.value))){
    if (space8.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (selectedSpace.id===space9.id && ((space9.value===space8.value && space9.value===space7.value) ||
  (space9.value===space6.value && space9.value===space3.value) || (space9.value==space5.value && 
  space9.value==space1.value))){
    if (space9.value===1){
      scorpionWins();
    } else {
      mileenaWins();
    }
  } else if (space1.value!==undefined && space2.value!==undefined && space3.value!==undefined
    && space4.value!==undefined && space5.value!==undefined && space6.value!==undefined
    && space7.value!==undefined && space8.value!==undefined && space9.value!==undefined){
      nobodyWins();
  } else {
    if (playerEmoji.src.includes("/Resources/Scorpion.png")){
      playerEmoji.src="./Resources/Mileena.png";
    } else {
      playerEmoji.src="./Resources/Scorpion.png";
    }
  }
}

function scorpionWins(){
  titleToHide.style.display="none";
  playerEmoji.src="./Resources/Scorpion.png";
  titleToChange.innerHTML="Wins!";
  for (var button of buttons){
    button.removeEventListener("click", play);
  }
}

function mileenaWins(){
  titleToHide.style.display="none";
  playerEmoji.src="./Resources/Mileena.png";
  titleToChange.innerHTML="Wins!";
  for (var button of buttons){
    button.removeEventListener("click", play);
  }
}

function nobodyWins(){
  titleToHide.style.display="none";
  playerEmoji.style.display="none";
  titleToChange.innerHTML="You're both losers!";
  titleToChange.style.textAlign="center";
}