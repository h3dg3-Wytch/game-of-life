//defaults
export const WIDTH = 800;
export const HEIGHT = 600;
export const CELL_SIZE = 20;
export const ROWS = WIDTH / CELL_SIZE;
export const COLUMNS = HEIGHT / CELL_SIZE;


// const initBoard = getEmptyBoard(ROWS, COLUMNS);
export const initialState = {
    board: undefined, 
    cells: [],
    isRunning: false, 
    interval: 100
};
export function reducer(state, {type, payload}) {
  switch (type) {
    case 'init':
        const newBoard = getEmptyBoard(ROWS, COLUMNS);
        const newCells = getCells(newBoard, ROWS, COLUMNS);
        return {...state, board: newBoard, cells: newCells}
    default:
      return state;
  }
}

const getEmptyBoard = (rows, columns) => {
    let board = [];
    for (let y = 0; y < rows; y++) {
        board[y] = [];
        for (let x = 0; x < columns; x++) {
            board[y][x] = false;
        }
    }
    return board;
};

export const getCells = (board, rows, columns) => {
    if(board === undefined ){
        return [];
    }
    let cells = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            if (board[y][x]) {
                cells.push({ x, y });
            }
        }
    }
    return cells;
}

export const calculateNeighbors = (board, x, y) => {
    let neighbors = 0;
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let y1 = y + dir[0];
        let x1 = x + dir[1];

        if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
            neighbors++;
        }
    }

    return neighbors;
}

