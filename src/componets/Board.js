import React from 'react';
import Cell from './Cell';



const Board = ({ width, handleClick, height, size, cells }) => {
    let ref = null;
    return (<div className="Board"
        style={{ width, height, backgroundSize: `${size}px ${size}px`}}
        onClick={(event) => {
            event.stopPropagation();
            event.persist();
            console.log('inside the click');
            handleClick(ref, event)
        }}
        ref={(n) => {
           ref = n;
         }}>
        {cells.map(cell => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} size={size}/>
        ))}
    </div>);
}
export default Board;