import React from 'react';

const Cell = ({n, m, active, handleClick}) => 
   ( active ) ?  <div className="Cell" onClick={handleClick}></div> : <div className="ActiveCell" onClick={handleClick} />

  
export default Cell;