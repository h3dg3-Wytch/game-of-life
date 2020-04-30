import React, { useReducer } from 'react';
import Board from './Board';
import Controls from './Controls';

import { initialState, reducer, getCells, ROWS, COLUMNS, WIDTH, HEIGHT, CELL_SIZE } from '../reducer';

import { handleClick } from '../actions/actions';

import '../styles/Game.css';

const Game = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { board, cells } = state;

    if(board === undefined) {
      dispatch({ type: 'init' });
    }
    
    console.log(cells);
    console.log(board);
    const gameClick = (ref, event) => dispatch(handleClick(ref, event));
    return (
        <div>
            <Board cells={cells} width={WIDTH} height={HEIGHT} size={CELL_SIZE} handleClick={gameClick} />
            <Controls />
        </div>
    );

}
export default Game;