import React, { useReducer, useEffect } from 'react';
import Board from './Board';
import Controls from './Controls';

import reducer, { initialState, } from '../reducer';

import { cellClick, intervalChange, clear, stop, run } from '../actions/actions';

import '../styles/Game.css';

const Game = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { cells, interval, isRunning } = state; 

    const handleClick = (n,m) => dispatch(cellClick(n,m));
    const handleIntervalChange = (interval) => dispatch(intervalChange(interval));
    const stopGame = () => dispatch(stop());
    const runGame = () => dispatch(run());
    const handleClear = () => dispatch(clear());

    if(cells === undefined) {
      dispatch({ type: 'init' });
    }

    useEffect(() => {
        const runner = setInterval(() => {
            if(isRunning) {
                console.log('running game');
                runGame();
            }
        }, interval);
        return () => clearInterval(runner);
      });



    return (
        <div className="container">
            <Board cells={cells} handleClick={handleClick}/>
            <Controls interval={interval} handleIntervalChange={handleIntervalChange} isRunning={isRunning} handleClear={handleClear}
             stopGame={stopGame} runGame={runGame}/>
        </div>
    );

}
export default Game;