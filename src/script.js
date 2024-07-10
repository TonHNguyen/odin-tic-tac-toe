//Create Variables
const dialog = document.getElementById('welcome-dialog');
const submitButton = document.getElementById('dialog-submit-button');
const firstUserName = document.getElementById('first-user-name');
const secondUserName = document.getElementById('second-user-name');

const gameBoardFactory = () => {
    let board = [['', '', ''], ['', '', ''], ['', '', '']];

    const setCell = (row, col, value) => {
        if (board[row][col] === '') {
            board[row][col] = value;
        }
    };

    const getBoard = () => {
        return board;
    };
    return { setCell, getBoard };
};

const playerFactory = (name, mark) => {
    let player = {};
    player.name = name;
    player.mark = mark;
    return player;
};



function createPlayer(firstName, secondName) {
    const player1 = playerFactory(firstName, 'X');
    const player2 = playerFactory(secondName, 'O');
    // console.log(player1, player2);
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
    const firstPlayerName = firstUserName.value;
    const secondPlayerName = secondUserName.value;
    createPlayer(firstPlayerName, secondPlayerName);
});

function loadDialog() {
    dialog.showModal();
};

window.onload = function() {
    loadDialog();
};


// let move1 = playerMove(1, 0, 'x');
// let move2 = playerMove(1, 1, 'x');
// let move3 = playerMove(1, 2, 'x');
// console.log(gameBoard.getBoard());
// const getBoard = gameBoardFactory();
// console.log(getBoard.getBoard());
// console.log('-------------------------------')
// const testCell = getBoard.setCell(1, 0, 'x');
// const testCell1 = getBoard.setCell(1, 1, 'x');
// const testCell2= getBoard.setCell(1, 2, 'x');
// console.log(getBoard.getBoard())

// function getPlayerData(player) {
//     playerName = player.name;
//     playerMark = player.mark;
//     console.log(playerName);
//     console.log(playerMark);
// };