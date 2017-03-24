import React from 'react';


export default function PreviousGuess(props) {
    return (
      <div className="previousGuess">
        <p>{props.guess}</p>
      </div>
    );
};
