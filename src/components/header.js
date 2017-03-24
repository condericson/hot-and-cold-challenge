import React from 'react';


export default function Header(props) {
    return (
      <div className="header">
        <div className="instructions">
          <p>How to play</p>
        </div>
        <div className="newGame">
          <p>New Game</p>
        </div>
        <div className="title">
          <span>Hot and Cold</span>
        </div>
      </div>
    );
};
