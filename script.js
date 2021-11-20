/*playing options*/
const choice =['rock', 'paper', 'scissors']

const win_table = [['tie', 'lose', 'win'],
                ['win', 'tie', 'lose'],
                ['lose', 'win','tie']]

function computerPlay() {
    let option = Math.floor(Math.random()*3);
    return choice[option];
}

function gameRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const playerChoiceNum = choice.indexOf(playerChoice);
    const computerChoiceNum = choice.indexOf(computerChoice);
    return win_table[playerChoiceNum][computerChoiceNum];
}

function game() {
    let wins = 0;
    let playerChoice;
    let computerChoice;
    let result;
    for(let i = 1; i <= 5; i++) {
        playerChoice = prompt("choose your weapon!");
        computerChoice = computerPlay();
        result = gameRound(playerChoice, computerChoice);
        if(result == 'win') {
            wins++;
        }
        switch(result){
            case 'win':
                console.log(`Your ${playerChoice} beats ${computerChoice}!`)
                break;
            case 'tie':
                console.log(`A tie!`);
                break;
            case 'lose':
                console.log(`Your ${playerChoice} is severely beaten by ${computerChoice}!`)

        }
    }
    if(wins >= 3) {
        console.log(`You win!`)
    } else {
        console.log(`You lost!!!`)
    }
}

game()