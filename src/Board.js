import React from 'react';

const Board = ({ width, handleClick, height, size, cells, stopGame, runGame, handleRandom, handleClear, interval, handleIntervalChange, isRunning }) =>
    <div>
        <div className="Board"
            style={{ width, height, backgroundSize: `${size}px ${size}px`}}
            onClick={handleClick}
            ref={(n) => { this.boardRef = n; }}>

            {cells.map(cell => (
                <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
            ))}
        </div>

        <div className="controls">
            Update every <input value={interval} onChange={handleIntervalChange} /> msec
            {isRunning ?
                <button className="button" onClick={stopGame}>Stop</button> :
                <button className="button" onClick={runGame}>Run</button>
            }
            <button className="button" onClick={handleRandom}>Random</button>
            <button className="button" onClick={handleClear}>Clear</button>
        </div>
    </div>;

export default Board;