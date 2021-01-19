function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


// Computer Moves

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);


// Player Moves

let playerInput = prompt('Wybierz Swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);


// Game Results

let argComputerMove = computerMove;
let argPlayerMove = playerMove;

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove) {

    console.log('wykonałem funkcję:', displayResult);
    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
        printMessage('Ty wygrywasz!!');
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && playerMove == 'kamień') || (argComputerMove == 'nożyce' && playerMove == 'papier')) {
        printMessage('Niestety przegrywasz.. Spróbuj ponownie..');
    } else if (playerMove == 'nieznany ruch') {
        printMessage('Wybrałeś niepoprawny ruch! Wybierz ponownie!');
    }
}

displayResult(computerMove, playerMove);
