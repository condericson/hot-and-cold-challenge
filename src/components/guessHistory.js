import React from 'react';
import PreviousGuess from './previousGuess';

class GuessHistory extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

    const guesses = this.props.guesses.map((guess, index) =>
      <PreviousGuess key={index} text={guess} />
    );

    console.log(guesses);
    return (
      <div className="previousGuesses">
        {guesses}
      </div>
    );
  }
};

GuessHistory.defaultProps = {
    guesses: ["1","2","3"]
};

export default GuessHistory;
