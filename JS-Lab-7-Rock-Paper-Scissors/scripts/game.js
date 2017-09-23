var boolImageCycle = true;
var random;
var nPlayerWins = 0;
var nCpuWins = 0;

window.onload = function() {
    setInterval(changeCompChoice, 100);
};


function changeCompChoice() {

    if (boolImageCycle) {
        random = Math.round(Math.random() * 4 + 1, 0);
        imgCpuChoice.src = getImagePath(random);
    }
}

function playerChose(playerNum) {

  if(boolImageCycle==false)
{
  return;
}

var imagePlayerChoice = document.getElementById("imgPlayerChoice");
imagePlayerChoice.src= getImagePath(playerNum);
boolImageCycle= false;
if (random == playerNum) {
  declareWinner.innerHTML ="click&rarr; Push... Go Again... &larr;Click";
}
else if (random == 1 && playerNum == 2) {
  declareWinner.innerHTML = "Click&rarr; Paper covers rock! You win! &larr;Click";
  nPlayerWins++;
}
else if (random == 1 && playerNum == 3) {
  declareWinner.innerHTML = "Click&rarr; Rock crushes scissors... you lose. &larr;Click";
  nCpuWins++;
}
  else if (random == 1 && playerNum == 4) {
  declareWinner.innerHTML = "Click&rarr; Rock crushes lizard... you lose. &larr;Click";
      nCpuWins++;
  }
  else if (random == 1 && playerNum == 5) {
    declareWinner.innerHTML = "Click&rarr; Spock vaporizes rock! you win! &larr;Click";
      nPlayerWins++;
  }
  else if (random == 2 && playerNum == 1) {
    declareWinner.innerHTML = "Click&rarr; Paper covers rock... you lose. &larr;Click";
      nCpuWins++;
  }
  else if (random == 2 && playerNum == 3) {
    declareWinner.innerHTML = "Click&rarr; scissors cut paper! you win! &larr;Click";
      nPlayerWins++;
}
else if (random == 2 && playerNum == 4) {
  declareWinner.innerHTML = "Click&rarr; lizard eats paper! you win! &larr;Click";
    nPlayerWins++;
}
else if (random == 2 && playerNum == 5) {
  declareWinner.innerHTML = "Click&rarr; Paper disproves spock... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 3 && playerNum == 1) {
  declareWinner.innerHTML = "Click&rarr; rock crushes scissors! you win!. &larr;Click";
    nPlayerWins++;
}
else if (random == 3 && playerNum == 2) {
  declareWinner.innerHTML = "Click&rarr; scissors cuts Paper... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 3 && playerNum == 4) {
declareWinner.innerHTML = "Click&rarr; scissors decapitates lizard... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 3 && playerNum == 5) {
  dclareWinner.innerHTML = "Click&rarr; spock smashes scissors! you win!. &larr;Click";
    nPlayerWins++;
}
else if (random == 4 && playerNum == 1) {
  declareWinner.innerHTML = "Click&rarr; rock crushes lizard you win!. &larr;Click";
    nPlayerWins++;
}
else if (random == 4 && playerNum == 2) {
  declareWinner.innerHTML = "Click&rarr; lizard eats Paper... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 4 && playerNum == 3) {
  declareWinner.innerHTML = "Click&rarr; scissors decapitates lizard you win!. &larr;Click";
    nPlayerWins++;
}
else if (random == 4 && playerNum == 5) {
  declareWinner.innerHTML = "Click&rarr; lizard poisons spock... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 5 && playerNum == 1) {
  declareWinner.innerHTML = "Click&rarr; spock vaporizes rock... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 5 && playerNum == 2) {
  declareWinner.innerHTML = "Click&rarr; Paper disproves spock... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 5 && playerNum == 3) {
  declareWinner.innerHTML = "Click&rarr; paper disproves spock you win!. &larr;Click";
    nPlayerWins++;
}
else if (random == 5 && playerNum == 4) {
  declareWinner.innerHTML = "Click&rarr; spock smashes scissors... you lose. &larr;Click";
    nCpuWins++;
}
else if (random == 5 && playerNum == 4) {
  declareWinner.innerHTML = "Click&rarr; lizard poisons spock you win!. &larr;Click";
    nPlayerWins++;
}
document.getElementById("playerScore").innerHTML = "Player - "+nPlayerWins;
document.getElementById("cpuScore").innerHTML = "Computer - "+nCpuWins;
declareWinner.style.border = "2px solid green";
}
function playAgain(){
boolImageCycle = true;
var imgPlayerChoice =document.getElementById("imgPlayerChoice");
var messageDeclareWinner = document.getElementById("declareWinner");
imagePlayerChoice.src= getImagePath(playerNum);
boolImageCycle= false

}

function getImagePath(num){

      switch (num) {
          case 1:
              return "./images/rock.jpg";
          case 2:
              return "./images/paper.jpg";
          case 3:
              return "./images/scissors.jpg";
          case 4:
              return "./images/lizard.jpg";
          case 5:
              return "./images/spock.jpg";
      }
}
