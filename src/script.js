

// function gameBoard(playerName, playerMark, playerMove ) {
//     arrayBoard = [['','',''], ['','',''], ['','','']];
//     // arrayBoard.push(player)
//     return arrayBoard;
// };
// const board = gameBoard();
// const board1 = board[0][1];
// board1.push('1');

// function gameBoard(playerName, playerMark, playerMove) {
//     let arrayBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    
//     // Update the board at the specified position
//     arrayBoard[playerMove.row][playerMove.col] = playerMark;
    
//     return arrayBoard;
// }

// // Example usage:
// const playerMove = { row: 0, col: 1 };
// const updatedBoard = gameBoard("John", "X", playerMove);

// console.log(updatedBoard);

function openPlayerDialog() {
    document.getElementById('player-dialog').style.display = 'block';
}

window.onload = openPlayerDialog;