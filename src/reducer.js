// const initBoard = getEmptyBoard(ROWS, COLUMNS);
export const initialState = {
    cells: undefined,
    isRunning: false, 
    interval: 100,
};

//TODO
// generate game grid, settings an n + m on each cell
// add ways to check running, setInterval in useEffect
export default function reducer(state, {type, payload}) {
  switch (type) {
    case 'init':
      const initedCells = createZeroMatrix(4, 3); 
      return {...state, cells: initedCells};
    case 'click':
      const {n, m} = payload;
      const updatedCells = pureMatrixMerge(state.cells, n, m)
      return {...state, cells: updatedCells};
    case 'run':
      const nextIteration = gameOfLife(state.cells);
      return {...state, isRunning: true, cells: nextIteration};
    case 'reset':
      return initialState;
    case 'clear':
        return {...state, isRunning: false, cells: createZeroMatrix(4, 3)};
    case 'stop':
        return {...state, isRunning: false};
    case 'start':
        return {...state, isRunning: true};
    case 'changeInterval':
        const { interval } = payload;
        console.log(interval);
        return {...state, interval };
    default:
      return state;
  }
}

export function gameOfLife(board) {
    const n = board.length;
    const m = board[0].length;
    const nextBoard = createZeroMatrix(n, m);
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        let aliveCount = 0;
  
        // Iterates through the neighbors and counts alive ones.
        for (let ni = (i-1); ni <= (i+1); ni++) {
          for (let nj = (j-1); nj <= (j+1); nj++) {
            // Makes sure a couple things:
            // 1. This is not the current cell.
            // 2. The position is still within the board's dimensions.
            // 3. The cell is alive.
            if ((ni != i || nj != j) &&
                (ni >= 0 && ni < n && nj >= 0 && nj < m) &&
                (board[ni][nj] === true)) {
              aliveCount++;
            }
          }
        }
  
        // Computes the next state based on aliveCount.
        nextBoard[i][j] = board[i][j]
          ? (aliveCount == 2 || aliveCount == 3)
          : (aliveCount == 3);
      }
    }
    return nextBoard;
  }
  
  /**
   * @param {Number} n
   * @param {Number} m
   * @return {Array<Array<number>>} A zero matrix of size n * m.
   */
  export function createZeroMatrix(n, m) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(new Array(m).fill(false));
    }
    return matrix;
  }
export function pureMatrixMerge(cells, n, m) {
    cells[n].splice(m, 1, true); 
    return cells;
} 