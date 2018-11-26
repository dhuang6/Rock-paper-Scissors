//separate everything into it's own function.
//randomly generates a number and sets each to an answer
results = [];
function computerPlay() {
  let num = Math.floor(Math.random() * (4-1) + 1);
  if(num == 1) {
    return "rock";
  } else if(num == 2) {
    return "paper";
  } else {
    return "scissors"
  }
}
//translates the player picks into answers.
function playerPick(pick) {
  pick.toLowerCase()
  if(pick =="rock") {
      return "rock";
  } else if(pick =="paper") {
      return "paper";
  } else if(pick =="scissors") {
      return "scissors";
  } else {
    alert("only rock, paper or scissors are allowed")
  }
}
//you want to return the results of this call to test this function console.log(playRound(playerSelection, computerSelection));
//takes the inputs of the computer and human and checks for who wins.
function playRound(playerSelection, computerSelection) {
  let winner //0 for computer 1 for player 2 for draw
  if(playerSelection == computerSelection) {
      winner = 2;
  }
  else if (playerSelection =="rock") {
    if(computerSelection =="paper") {
        winner = 0;
    } else if (computerSelection == "scissors") {
        winner = 1;
    }
  }
  else if(playerSelection == "scissors") {
    if(computerSelection == "paper") {
        winner = 1;
    } else if(computerSelection == "rock") {
        winner = 0;
    }
  }
  return winner;
}

function game() {
  const computerPick = computerPlay()
  for(i = 1; i < 6; i++) {
    let pick = prompt("Round " + i + " rock paper or scissors?")
      round = playRound(playerPick(pick), computerPick)
      if(round == 0) {
        results.push(`You Lose! ${computerPick} beats ${pick}`);
      } else if(round == 1) {
        results.push(`You Win! ${pick} beats ${computerPick}`);
      } else if(round ==2) {
        results.push(`${pick} draws with ${computerPick}`)
      }
    }
  }
  game()
  
  console.log(results);