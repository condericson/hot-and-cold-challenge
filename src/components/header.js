import React from 'react';


export default function Header(props) {
    return (
      <div className="header">
        <div className="howToPlay">
          <p>What is this?</p>
        </div>
        <div className="newGame">
          <p>New Game</p>
        </div>
        <div className="title">
          <span className="hot">Hot</span> or <span className="cold">Cold</span>
        </div>
      </div>
    );
};
