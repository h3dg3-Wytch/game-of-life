import React from 'react';

const Controls = ({ interval, handleIntervalChange, stopGame, runGame, handleRandom, handleClear, isRunning  }) => 
  <div className="controls">
    Update every <input value={interval} onChange={handleIntervalChange} /> msec
    {isRunning ?
        <button className="button" onClick={stopGame}>Stop</button> :
        <button className="button" onClick={runGame}>Run</button>
    }
    <button className="button" onClick={handleRandom}>Random</button>
    <button className="button" onClick={handleClear}>Clear</button>
  </div>

export default Controls;