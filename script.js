/*playing options*/
const choice =['rock', 'paper', 'scissors']

const win_table = [['tie', 'lose', 'win'],
                ['win', 'tie', 'lose'],
                ['lose', 'win','tie']]

let gameInfo = document.querySelector(".game-info");
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let buttons = document.querySelectorAll('button')

buttons.forEach((button) => button.addEventListener('click', playRound));

function computerPlay() {
    let option = Math.floor(Math.random()*3);
    return choice[option];
}

function roundResult(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const playerChoiceNum = choice.indexOf(playerChoice);
    const computerChoiceNum = choice.indexOf(computerChoice);
    return win_table[playerChoiceNum][computerChoiceNum];
}

function inform(msg) {
    gameInfo
.textContent = msg;
}

function resetGame() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

function playRound(e) {
    playerChoice = e.target.textContent;
    computerChoice = computerPlay();
    result = roundResult(playerChoice, computerChoice)
    switch(result){
        case 'win':
            inform(`Your magnificient ${playerChoice} emerges victorious from the battle with foul ${computerChoice}!`);
            playerScore.textContent = 1 + +playerScore.textContent;
            break;
        case 'tie':
            inform('A tie!');
            break;
        case 'lose':
            inform(`Enemy ${computerChoice} leaves your ${playerChoice} utterly destroyed!`)
            computerScore.textContent = 1 + +computerScore.textContent;
            break;
        default:
            inform('Something unforeseen happened!')
            break;
    }
    if (+playerScore.textContent >= 5) {
        inform("You won the game! Let's play again.")
        resetGame();
    } else if (+computerScore.textContent >= 5) {
        inform("Computer wins. The game starts over.");
        resetGame();
    }

}