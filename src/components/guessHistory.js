import React from 'react';

export default function GuessHistory(props) {
  const guesses = props.guesses.map((guess, index) =>
    <li key={index}>{guess}</li>
  );
    return (
      <div className="previousGuesses">
        <ul>
          {guesses}
        </ul>
      </div>
    )
}
