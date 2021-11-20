/*playing options*/
const choice =['rock', 'paper', 'scissors']

let win_table = [['tie', 'lose', 'win'],
                ['win', 'tie', 'lose'],
                ['lose', 'win','tie']]

function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    return choice;
}

function gameRound(playerChoice, computerChoice) {
    return win_table[playerChoice][computerChoice];
}

