function playGame(playerInput) {

    clearMessages();
    console.log('jest czysto');

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
    }

    // Computer Moves

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    // Player Moves

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
}

let playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function () {
    playGame(1);
});

let playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function () {
    playGame(2);
});

let playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function () {
    playGame(3);
});
