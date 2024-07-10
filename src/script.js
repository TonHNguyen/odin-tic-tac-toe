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

function getPlayerData(player) {
    playerName = player.name;
    playerMark = player.mark;
    console.log(playerName);
    console.log(playerMark);
};

// let namePlayer = prompt('Please enter your name: ');
// let markPlayer = prompt('Please type either "x" or "o" mark for your move');
// let player1 = playerFactory(namePlayer, markPlayer);
// console.log(player1);

let gameBoard = gameBoardFactory();


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
