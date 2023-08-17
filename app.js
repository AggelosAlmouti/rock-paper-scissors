function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];

    let shuffle = choice.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    return shuffle[0];
}

function game() {
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                return -1
            } else if (computerSelection == 'rock') {
                return 0
            } else {
                return 1
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                return -1
            } else if (computerSelection == 'paper') {
                return 0
            } else {
                return 1
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                return -1
            } else if (computerSelection == 'scissors') {
                return 0
            } else {

                return 1
            }
        }
    }

    let player, computer;
    player = computer = 0;

    for (i = 0; i < 5; i++) {
        // let playerSelection = prompt("Choose: rock, paper, scissor: ").toLowerCase();
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if(result == 1) {
            console.log('You win!');
            player++;
        }else if(result == -1) {
            console.log('You lose!');
            computer++;
        }else if (result == 0) {
            console.log('Its a tie!');
        }
    }

    console.log('----------------------')
    if(player > computer) {
        console.log('You won!');
    }else if(player < computer) {
        console.log('You lost!');
    }else {
        console.log('Tie game!')
    }
}

game();