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

    const message = document.querySelector('.message');
    const results = document.querySelector('.results');
    const resultHeader = document.querySelector('.results>h2');
    let playerSelection;

    const buttons = document.querySelectorAll('.player .button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            const computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
            if (result == 1) {
                message.innerHTML = 'you win!';
                message.setAttribute('style', 'opacity: 100; color: green;');

                const p = document.createElement('p');
                p.innerHTML = 'player wins';
                p.setAttribute('style', 'color: green');
                resultHeader.after(p);
            } else if (result == -1) {
                message.innerHTML = 'you lose!';
                message.setAttribute('style', 'opacity: 100; color: red;');

                const p = document.createElement('p');
                p.innerHTML = 'computer wins';
                p.setAttribute('style', 'color: red');
                resultHeader.after(p);
            } else if (result == 0) {
                message.innerHTML = 'it\'s a tie!';
                message.setAttribute('style', 'opacity: 100;');

                const p = document.createElement('p');
                p.innerHTML = 'tie game';
                resultHeader.after(p);
            }
        })
    });
}

game();