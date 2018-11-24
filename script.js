
var results = [];
//generate a random number between 0 and 1 using Math.random(); split it so each quarter is an answer
var computerplayer = Math.random();
if(computerplayer < 0.34) {
	computerplayer = 'rock';
} else if (computerplayer <= 0.67) {
	computerplayer = 'paper';
} else {
	computerplayer = 'scissors';
}

console.log(computerplayer);


function playRound(userChoice, computerplayer) {
	//take two parameters and return a string declaring the winner
	this.userChoice = userChoice;
	this.computerplayer = computerplayer;
	if(userChoice.toUpperCase() === computerplayer.toUpperCase()) {
		return 'the result is a tie!'
	}if (userChoice.toUpperCase() === 'ROCK' && computerplayer.toUpperCase() === 'SCISSORS') {
		return 'The rock wins!';
	} else {
		return 'Paper wins!'
	}
 

	  if(userChoice.toUpperCase() === 'PAPER' && computerplayer.toUpperCase()=== 'ROCK') {
		return 'Paper has won!';
	} else  if(computerSelection.toUpperCase() === 'SCISSORS'){
		return 'scissors has won'
	}

	if (userChoice.toUpperCase() === 'SCISSORS' && computerplayer.toUpperCase() === 'ROCK') {
		return 'Rock wins !';
	} else if(computerSelection.toUpperCase() ==='PAPER'){
		return 'scissors wins!';
		}

	}
	
function game(playRound) {
	i = 0;
	do {
		userChoice = prompt('Do you choose rock, paper or scissors?');
			results.push(playRound(userChoice, computerplayer));
			console.log(results);
			i++
	}
	while(i < 5);
}
game(playRound);

	