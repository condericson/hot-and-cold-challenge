import React from 'react';
import PreviousGuess from './previousGuess';

class GuessHistory extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const guess = this.props.guesses.map((guess, index) =>
      <PreviousGuess key={index} {...guess} />
    );
    return (
      <div className="previousGuesses">
        {guess}
      </div>
    );
  }
};

GuessHistory.defaultProps = {
    guesses: []
};

export default GuessHistory;
