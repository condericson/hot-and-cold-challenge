import React from 'react';


export default function HowToPlay(props) {
    return (
      <div className={props.classes}>
        <div className="howtocontent">
          <div className="howtoplaytitle">"What's hot? Who's cold?"</div>
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
          <ul>
          <li>1. &nbsp;&nbsp;  I pick a random secret number between 1 to 100 and keep it hidden.</li>
          <li>2. &nbsp;&nbsp;  You need to guess until you can find the hidden secret number.</li>
          <li>3. &nbsp;&nbsp;  You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
          </ul>
          <p>Get it?</p>
          <button onClick={props.onClick}>Got it!</button>
        </div>
      </div>
    );
};
