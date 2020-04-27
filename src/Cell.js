import React from 'react';

const Cell = ({x, y, size}) =>  
    <div className="Cell" style={{
        left: `${size * x + 1}px`,
        top: `${size * y + 1}px`,
        width: `${size - 1}px`,
        height: `${size - 1}px`,
    }} />;

export default Cell;