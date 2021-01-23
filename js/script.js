{
const playGame = function (playerInput) {

    const getMoveName = function(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
    }
    
    const displayResult = function(argComputerMove, argPlayerMove) {
        console.log('wykonałem funkcję:', displayResult);
        if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
            printMessage('Ty wygrywasz!!');
            playerScore++;
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && playerMove == 'kamień') || (argComputerMove == 'nożyce' && playerMove == 'papier')) {
            printMessage('Niestety przegrywasz.. Spróbuj ponownie..');
            computerScore++;
        } else if (playerMove == 'nieznany ruch') {
            printMessage('Wybrałeś niepoprawny ruch! Wybierz ponownie!');
        }
        
        printMessage('Wynik ' + computerScore + ':' + playerScore);
    }
    
    clearMessages();

    // Computer Moves
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    // Player Moves
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);


    displayResult(computerMove, playerMove);
}

let playerScore = 0;
let computerScore = 0;

const playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function () {
    playGame(1);
});

const playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function () {
    playGame(2);
});

const playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function () {
    playGame(3);
});
}