import reducer, { createZeroMatrix, gameOfLife, initialState, pureMatrixMerge } from '../reducer/reducer';

describe('reducer', () => {
    const emptyGrid = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
    const sampleGrid = [
      [false, true, false],
      [true, true, true],
      [false, false, false],
      [false, false, false]
    ];
    const beforeClickGrid =  [
      [false, false, false],
      [true, true, true],
      [false, false, false],
      [false, false, false]
    ];
    const solutionGrid = [
      [true, true, true],
      [true, true, true],
      [false, true, false],
      [false, false, false]
    ];

    it('does load an empty matrix', () => {
      expect(createZeroMatrix(4, 3)).toEqual(emptyGrid);
    });

    it('does a correct iteration for the game of life', () => {
      expect(gameOfLife(sampleGrid)).toEqual(solutionGrid);
    });

    // it('can handle an init', () => {
    //     const nextState = {  
    //         cells: emptyGrid,
    //         isRunning: false, 
    //         interval: 100,
    //     };
    //     expect(reducer(initialState, { type: 'init'} )).toEqual(nextState);
    // });

    it('can merge a pure matrix', () => {
        expect(pureMatrixMerge(beforeClickGrid, 0, 1)).toEqual(sampleGrid)
    });

    it('can handle a click', () => {
        const state = {
            cells: beforeClickGrid,
            isRunning: false, 
            interval: 100 
        };

        const nextState = {  
            cells: sampleGrid,
            isRunning: false, 
            interval: 100,
        };

        const dispatch = { type: 'click', payload: { n: '0', m: '1'}}

        expect(reducer(state, dispatch)).toEqual(nextState);
    });

    it('can handle a run', () => {
        const state = {
            cells: sampleGrid,
            isRunning: false, 
            interval: 100 
        };

        const nextState = {  
            cells: solutionGrid,
            isRunning: true, 
            interval: 100,
        };

        const dispatch = { type: 'run' };
        expect(reducer(state, dispatch)).toEqual(nextState); 
    });

    it('can reset when told to', () => {
        const state = {
            cells: sampleGrid,
            isRunning: false, 
            interval: 100 
        };

        const dispatch = { type: 'reset' };
        expect(reducer(state, dispatch)).toEqual(initialState);
    });

    // it('can clear the board', () => {
    //     const state = {
    //         cells: sampleGrid,
    //         isRunning: true, 
    //         interval: 100 
    //     }; 

    //     const nextState = {
    //         cells: emptyGrid,
    //         isRunning: false,
    //         interval: 100
    //     };

    //     const dispatch = { type: 'clear' };
    //     expect(reducer(state, dispatch)).toEqual(nextState);
    // });

    it('can stop the run', () => {
        const state = {
            cells: undefined,
            isRunning: true, 
            interval: 100 
        }; 

        const nextState = {
            cells: undefined,
            isRunning: false,
            interval: 100
        };

        const dispatch = { type: 'stop' };
        expect(reducer(state, dispatch)).toEqual(nextState);
    });

    it('can start the run', () => {
        const state = {
            cells: undefined,
            isRunning: false, 
            interval: 100 
        }; 

        const nextState = {
            cells: undefined,
            isRunning: true,
            interval: 100
        };

        const dispatch = { type: 'start' };
        expect(reducer(state, dispatch)).toEqual(nextState);
    });

    it('can change the interval', () => {
        const state = {
            cells: undefined,
            isRunning: false, 
            interval: 100 
        }; 

        const nextState = {
            cells: undefined,
            isRunning: false,
            interval: 200
        };

        const dispatch = { type: 'changeInterval', payload: {interval: 200}};
        expect(reducer(state, dispatch)).toEqual(nextState);
    });


})