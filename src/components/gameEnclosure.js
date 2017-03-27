import React, {Component} from 'react';
import GuessEntryForm from './guessEntry';
import ResponseText from './responseText';
import GuessHistory from './guessHistory';
import GuessNumber from './guessNumber';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default class GameEnclosure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFormat: 'guessing',
      targetNumber: (getRandomInt(1, 100)),
      responseText: "Make a guess!",
      guesses: [],
      guessNumber: 0
    };
    this.onGuess = this.onGuess.bind(this);
    this.iterateGuessNumber = this.iterateGuessNumber.bind(this);
  }

  iterateGuessNumber() {
    let num = this.state.guessNumber;
    num += 1;
    this.setState({
      guessNumber: num
    })
    console.log("guessNumber", this.state.guessNumber);
  }

  onGuess(guess) {
      guess = guess.trim();
      console.log(this.state.targetNumber);
      const difference = Math.abs(guess - this.state.targetNumber);

      if (isNaN(guess) || guess > 100 || guess < 1 || guess.length == 0) {
        return (this.setState({
          responseText: 'Enter a number 1-100'
        }))
      }
      if (difference >= 50) {
        this.setState({
          responseText: 'Super cold!'
        })
        this.iterateGuessNumber();
      }
      else if (difference >=20) {
        this.setState({
          responseText: 'Cold!'
        })
        this.iterateGuessNumber();
      }
      else if (difference >= 10) {
        this.setState({
          responseText: "You're warm!"
        })
        this.iterateGuessNumber();
      }
      else if (difference >= 1) {
        this.setState({
          responseText: "You're on fire!"
        })
        this.iterateGuessNumber();
      }
      if (guess == this.state.targetNumber) {
        this.setState({
          responseText: 'Correct!'
        })
        this.setState({
          currentFormat: 'correct'
        })
        this.iterateGuessNumber();
      }
      this.setState({
        guesses: this.state.guesses.concat(guess)
      })
      console.log(this.state.guesses);
  }

/*}  setCurrentFormat(currentFormat) {
      this.setState({
          currentFormat: 'guessing'
      });
  }*/




render() {
    return (
      <div className="gameEnclosure">
        <ResponseText responseText={this.state.responseText} />
        <GuessEntryForm onGuess={this.onGuess} />
        <GuessNumber guessNumber={this.state.guessNumber} />
        <div className="guessHistoryDiv">
          <GuessHistory guesses={this.state.guesses} />
        </div>
      </div>
    );
};
};
