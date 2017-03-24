import React from 'react';




class GuessEntryForm extends React.Component {
  constructor(props){
    super(props)
  }

  onGuess(event) {
    event.preventDefault();
    console.log(this.textInput.value);
    this.props.onGuess(this.textInput.value)
    if(this.textInput.value) {
      const value = this.textInput.value;
      console.log(value);
    }
    this.textInput.value = '';
  }

    render() {
          return (
            <form className="guessEntry" onSubmit={(e) => this.onGuess(e)}>
                <input type="text" name="textInput" placeholder="Enter a number" autoComplete="off" ref={input => this.textInput = input} />
                <button>Guess</button>

            </form>
          );


    }
}



export default GuessEntryForm
