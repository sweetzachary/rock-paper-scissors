/*playing options*/
let options = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let choice = floor(Math.random()*3);
    return options[choice];
}