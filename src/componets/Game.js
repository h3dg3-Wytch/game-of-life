import React, { useReducer } from 'react';
import Board from './Board';
import Controls from './Controls';

import { initialState, reducer, getCells, ROWS, COLUMNS, WIDTH, HEIGHT, CELL_SIZE } from '../reducer';

import '../styles/Game.css';

const Game = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { board, cells } = state;

    if(board === undefined) {
      dispatch({ type: 'init' });
    }
    
    return (
        <div>
            <Board cells={cells} width={WIDTH} height={HEIGHT} size={CELL_SIZE} />
            <Controls />
        </div>
    );

}
export default Game;