/*playing options*/
const choice =['rock', 'paper', 'scissors']

const win_table = [['tie', 'lose', 'win'],
                ['win', 'tie', 'lose'],
                ['lose', 'win','tie']]

function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    return choice;
}

function gameRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const playerChoiceNum = choice.indexOf(playerChoice);
    const computerChoiceNum = choice.indexOf(computerChoice);
    return win_table[playerChoiceNum][computerChoiceNum];
}
/*
function game() {
    for(let i = 1; i <= 5; i++) {

    }
}*/