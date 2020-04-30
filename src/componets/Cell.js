import React from 'react';

const Cell = ({n, m, active, handleClick }) => {
    const activeClassName = (active) ? "ActiveCell" : "Cell";
    return (<div key={`${n},${m}`} className={activeClassName} onClick={() => handleClick(n,m)}></div>);
}


  
export default Cell;