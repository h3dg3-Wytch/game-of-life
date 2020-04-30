import React from 'react';
import Cell from './Cell';



const Board = ({ cells }) => {

  
}

export function matrixToComponent(cells, handleClick) {
    const result = [];
    for(let i = 0; i < cells.length; i++ ){
        for(let j = 0; j < cells[0].length; j++) {
            result.push(<Cell n={i} m={j} onClick={handleClick} active={cells[i][j]}/>)
        }
    }
    return result;
}
export default Board;