//making a rock paper scissors game.
results = [];
let humanPick

//allows computer player to randomly choose either rock / paper / scissors
function computerPlay() {
  let computerMove = Math.floor(Math.random() * 3) + 1
  if(computerMove == 1) {
    return "paper";
  }
   else if(computerMove == 2) {
    return "rock";
  } else {
    return "scissors";
  }
}
console.log(computerPlay());

//getting the program to account for what is entered by the person playing.
/*
function humanPlay(pick) {
  pick.toLowerCase();
  if(pick === "rock") {
    return "rock";
  }
  else if(pick === "paper") {
    return "paper";
  } else if(pick === "scissors") {
    return "scissors";
  } else if(pick !== "rock" || "paper" || "scissors") {
      return "entry not valid, please enter rock paper or scissors";
  }
}



*/

  function playRound(playerSelection, computerSelection){
  // 0 means the computer won 1 means the human won 2 means tie
  let winner
  if(playerSelection == computerSelection) {
          winner = 2;
        
  }
  else if(playerSelection == "rock") {
      if(computerSelection == "paper"){
         winner = 0;
      } else if(computerSelection == "scissors") {
          winner = 1;
      }
  }//each of these are else if because they define a new set of terms that don't match the other categories.
    else if(playerSelection == "paper") {
        if(computerSelection == "rock"){
            winner = 1;
        } else if(computerSelection =="scissors") {
            winner = 0;
        }
    }
    else if(playerSelection =="scissors") {
        if(computerSelection =="rock") {
            winner = 0;
        } else if(computerSelection =="paper") {
            winner = 1;
      }
       
    }//stop the function and return the result.
     return winner

}


//catches the button input of the human and turns them into a string.
//the buttons need to call your playRound function

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  
  button.addEventListener('click', (e) => {
      userChoice = button.id;
  });
    
  button.addEventListener('click', humanPick)
   function humanPick(userChoice){
   computerPick = computerPlay();
    if(userChoice === 'rockbtn') {
      return "rock";
    } else if(userChoice ==='paperbtn') {
      return "paper";
    } else {
      return "scissors";
    }
    
  }
  
  button.addEventListener('click', playRound)
  function playRound(playerSelection, computerSelection){
  // 0 means the computer won 1 means the human won 2 means tie
  let winner
  if(playerSelection == computerSelection) {
          winner = 2;
        
  }
  else if(playerSelection == "rock") {
      if(computerSelection == "paper"){
         winner = 0;
      } else if(computerSelection == "scissors") {
          winner = 1;
      }
  }//each of these are else if because they define a new set of terms that don't match the other categories.
    else if(playerSelection == "paper") {
        if(computerSelection == "rock"){
            winner = 1;
        } else if(computerSelection =="scissors") {
            winner = 0;
        }
    }
    else if(playerSelection =="scissors") {
        if(computerSelection =="rock") {
            winner = 0;
        } else if(computerSelection =="paper") {
            winner = 1;
      }
       
    }//stop the function and return the result.
     return winner

}
  
});


//play 5 rounds of rock paper scissors against the computer, store the results in an array and display in console.
//by having defined what 0 , 1 , 2 means in the playRound you can just use those definitions to declare winner / loser
//roundResults uses the previously defined 0 , 1 , 2 to declare a winner.
//updated the buttons need to review this game function it's running game before receiving the results from the human.
function game() {
  const computerPick = computerPlay()
  const humanChoice = document.querySelector('button');
//  for(x = 1; x < 6; x++) {
   roundResults = playRound(humanPick(userChoice), computerPick);
    if(roundResults == 0) {
      results.push(`You lose! ${computerPick} beats ${humanChoice}`)
    }
    else if(roundResults == 1) {
      results.push(`You win! ${humanChoice} beats ${computerPick}`)
    } else if(roundResults == 2) {
      results.push("You tied with the computer and chose the same.")
    }
   
  }
  game();

 

