
totalPlayerWins = 0;
totalComputerWins = 0;
round = 0;
results = [];

function computerPlay() {
  var move = Math.floor(Math.random()* 3) + 1;
  if(move === 1) {
    return "paper";
  } else if(move ===2) {
    return "scissors";
  } else {
    return "rock";
  }
}
console.log(computerPlay());

function playRound(humanMove, computerMove) {
  
  if(humanMove === computerMove) {
    round ++;
    return "The game ended in a tie!";
  }
  else if(humanMove == "rock") {
    if(computerMove == "paper") {
          totalComputerWins ++;
          round ++;
        return "Paper covers rock the computer wins!";
    } else if(computerMove == "scissors" ) {
          totalPlayerWins ++;
          round ++;
        return "Rock beats scissors you win!";
    }
  }
  
  else if(humanMove == "scissors") {
    if(computerMove == "paper") {
          
          totalPlayerWins ++;
          round ++;
        return "Scissors beats paper, you win!";
    } else if(computerMove == "rock") {
          totalComputerWins ++;
          round ++;
        return "Rock beats scissors, sorry you lost.";
    }
  }
  else if(humanMove == "paper") {
    if(computerMove == "scissors") {
          
          totalComputerWins ++;
          round ++;
      return "Scissor beats paper, you win!"
    } else {
          totalPlayerWins ++;
          round ++;
      return "Paper covers rock, you win!"
    }
  }
  return winner;
}


function game(value) {
  userMove = value;
  const computerPick = computerPlay();
  var round = playRound(userMove, computerPick);

    writeInTheDoc();
}

var writeInTheDoc = function() {
  var box = document.getElementById("result");
  const computerPick = computerPlay();
  box.innerHTML = "<br>"+
    "-----------------------------------------------------------------------------"+
    "<br>"+
    "You choose: " +"<strong>" + userMove +"</strong>" + " You have so far won:  "+ totalPlayerWins + " rounds " +"<br>" + " Number of rounds played " + round + "<br>";
  box.innerHTML += "The computer chooses: "  +"<strong>" + computerPick + "</strong>" + " The computer has won " + totalComputerWins +
  "<br>"+
    "-----------------------------------------------------------------------------<br>"+
    playRound(userMove,computerPick)+ "<br>"
    "-----------------------------------------------------------------------------<br>";
}
