import React from 'react';


function GuessNumber(props) {
    return (
      <div className="previousGuess">
        <p className="guessNumber">{props.guessNumber} guess{props.guessNumber == 1 ? '' : 'es'} so far!</p>
      </div>
    );
};

GuessNumber.defaultProps = {
    guessNumber: "0"
};

export default GuessNumber
