export const cellClick = (n = 0, m = 0) => {
    return { type: 'click', payload: {n, m}}
};

export const intervalChange = (interval = 100) => ({ type: 'changeInterval', payload: {interval} });

export const reset = () => ({ type: 'reset'});

export const clear = () => ({ type: 'clear'});

export const stop = () => ({ type: 'stop'});

export const run = () => ({ type: 'run' });
