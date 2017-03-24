import React, {Component} from 'react';
import GuessEntryForm from './guessEntry';
import ResponseText from './responseText';
import GuessHistory from './guessHistory';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class GameEnclosure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFormat: 'guessing',
      targetNumber: (getRandomInt(1, 100)),
      responseText: "Make a guess!",
      guesses: []
    };
  }

  componentWillMount(){
    console.log(this.state);
  }

  onGuess(guess) {
      guess = guess.trim();
      console.log(guess);
      console.log(this);
      console.log(this.state.targetNumber);
      if (guess % 1 !== 0 || guess > 100) {
        return window.alert("Guess a whole number, 1-100");
      }
      if (guess !== this.state.targetNumber && guess > (this.state.targetNumber - 10) && guess < (this.state.targetNumber + 10)) {
        //change responseText to "hot"
      }
      if (guess < (this.state.targetNumber - 10) || guess > (this.state.targetNumber + 10)) {
        //change responseText to "cold"
      }
      if (guess === this.state.targetNumber) {
          //change responseText to 'correct'
          //change state to 'correct'
      }
      //add guess to guess history
  }

  setCurrentFormat(currentFormat) {
      this.setState({
          currentFormat: 'guessing'
      });
  }



  render() {
    return (
      <div className="gameEnclosure">
        <ResponseText />
        <GuessEntryForm onGuess={this.onGuess} />
        <div className="guessHistoryDiv">
          <GuessHistory />
        </div>
      </div>
    );
  }
};


export default GameEnclosure
