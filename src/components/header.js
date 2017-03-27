import React from 'react';
import HowToPlay from './howtoplay';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      classes: 'howtoplaymodal, notDisplayed'
    }
  }

  onClick() {
    if(!this.state.active) {
      this.setState({
        active: true,
        classes: 'howtoplaymodal, displayed'
      })
    }
    else {
      this.setState({
        active: false,
        classes: 'howtoplaymodal, notDisplayed'
      })
    }
  }

  render() {
    return (
      <div>
        <HowToPlay onClick={this.onClick.bind(this)} classes={this.state.classes}/>
          <div className="header">
            <div className="howToPlay">
              <p onClick={this.onClick.bind(this)}>What is this?</p>
            </div>
            <div className="newGame">
              <p>New Game</p>
            </div>
            <div className="title">
              <span className="hot">Hot</span> or <span className="cold">Cold</span>
            </div>
          </div>
      </div>

    );
  }

}
