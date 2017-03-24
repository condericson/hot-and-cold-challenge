import React, {Component} from 'react';
import GuessEntryForm from './guessEntry';
import ResponseText from './responseText';
import GuessHistory from './guessHistory';
import GuessNumber from './guessNumber';

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
      guesses: [],
      guessNumber: "0"
    };
    this.onGuess = this.onGuess.bind(this);
  }

componentWillMount() {
  console.log(this.state.targetNumber);
  console.log(this.state.responseText);
}


  onGuess(guess) {
      guess = guess.trim();
      console.log(guess);

      console.log(this.state.targetNumber);

      const difference = Math.abs(guess - this.state.targetNumber);

      if (isNaN(guess) || guess > 100 || guess.length == 0) {
        return (this.setState({
          responseText: 'Enter a valid number 1-100'
        }))
      }
      if (difference >= 50) {
        this.setState({
          responseText: 'Super cold!'
        })
        
      }
      else if (difference >=20) {
        this.setState({
          responseText: 'Cold!'
        })
      }
      else if (difference >= 10) {
        this.setState({
          responseText: "You're warm!"
        })
      }
      else if (difference >= 1) {
        this.setState({
          responseText: "You're on fire!"
        })
      }
      if (guess === this.state.targetNumber) {
        this.setState({
          responseText: 'Correct!'
        })
        this.setState({
          currentFormat: 'correct'
        })
      }
      this.setState({
        guesses: this.state.guesses.concat(guess)
      })
  }

  setCurrentFormat(currentFormat) {
      this.setState({
          currentFormat: 'guessing'
      });
  }



  render() {
    const currentResponseText = this.state.responseText;
    console.log(currentResponseText);
    console.log(this.state.guesses);
    return (
      <div className="gameEnclosure">
        <ResponseText {...currentResponseText}/>
        <GuessEntryForm onGuess={this.onGuess} />
        <GuessNumber {...this.props.guessNumber} />
        <div className="guessHistoryDiv">
          <GuessHistory />
        </div>
      </div>
    );
  }
};


export default GameEnclosure
