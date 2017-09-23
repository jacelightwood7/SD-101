function playGuessMyNumber(){
var totalGuesses =0;
var secretNumber = Math.round(Math.random()*100+1)
var guess = prompt("Guess My Number. Its between 1-100.");
var divGameResult = document.getElementById("divGameResult")
var guessedIt = false;

//guessing loop
while (!guessedIt){
      totalGuesses++;

      if(parseInt(guess)>secretNumber){
        var guess = prompt("Too high, guess again or type 'Q' to quit.");
      }
      else if (parseInt(guess) < secretNumber) {
        var guess = prompt("too low, guess again or type'Q' to quit.");
      }
      else if (parseInt(guess)==secretNumber) {
        divGameResult.innerHTML = secretNumber+" is correct. Total guesses-"+totalGuesses;
        guessedIt=true;
        displayRanking(totalGuesses);
      }
      else if (guess=="Q") {
        divGameResult.innerHTML ="quitter! It was " + secretNumber+". Total guesses = "+totalGuesses;
        break;
      }
      else {
        var guessm= prompt("Was that a real guess? Guess again or type 'Q' to quit ");
      }
}
}

function displayRanking(totalGuesses)
{
  var divRanking = document.getElementById('divRanking');

  switch (totalGuesses) {
    case 1:
    divRanking.innerHTML = "Hole in one! Get out of my CPU circuits!";
        break;
      case 2:
      case 3:
      case 4:
      case 5:
divRanking.innerHTML = "Very good. we should play chess... I'll win, but at least it will be a challange"
break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      divRanking.innerHTML = "Average score";
break;
    default:
    divRanking.innerHTML = "You can do better";
      break;
  }
}
