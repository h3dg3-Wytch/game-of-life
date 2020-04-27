import React from 'react';
import Cell from './Cell';

const Board = ({ width, handleClick, height, size, cells }) =>
    <div className="Board"
        style={{ width, height, backgroundSize: `${size}px ${size}px`}}
        onClick={handleClick}
        ref={(n) => { 
            //this.boardRef = n;
         }}>
        {cells.map(cell => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
        ))}
    </div>;

export default Board;