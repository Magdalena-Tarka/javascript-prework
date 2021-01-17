// Computer Moves

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Player Moves

let playerInput = prompt('Wybierz Swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == 1) {
    playerMove = 'kamień';
} else if (playerInput == 2) {
    playerMove = 'papier';
} else if (playerInput == 3) {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// Game Reasults

if (computerMove == playerMove) {
    printMessage('Remis!');
} else if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
    printMessage('Ty wygrywasz!!');
} else if ((computerMove == 'kamień' && playerMove == 'nożyce') || (computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'papier')) {
    printMessage('Niestety przegrywasz.. Spróbuj ponownie..');
} else if (playerMove == 'nieznany ruch') {
    printMessage('Wybrałeś niepoprawny ruch! Wybierz ponownie!');
}