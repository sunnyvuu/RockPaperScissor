function computerPlay() {
    var myArray = ['Rock', 'Paper', 'Scissors'];
    var rand = Math.floor(Math.random()*myArray.length); // generates a random index between 0-2
    var rValue = myArray[rand];
    return rValue;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            return 'You win. Rock beats scissors.'
        }
        if (computerSelection == 'Paper') {
            return 'You lose. Paper beats rock.'
        }
    } 

    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            return 'You win. Paper beats rock.'
        } 
        if (computerSelection == 'Scissors') {
            return 'You lose. Scissors beats paper.'
        }
    }

    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            return 'You lose. Rock beats scissors.'
        }
        if (computerSelection == 'Paper') {
            return 'You win. Scissors beats rock.'
        }
    }

    if (playerSelection == computerSelection) {
        return 'It\'s a draw!'
    }
}

var playerSelection = 'Paper';
var computerSelection = computerPlay(); 
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));