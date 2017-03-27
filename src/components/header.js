import React from 'react';
import HowToPlay from './howtoplay';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      class1: 'howtoplaymodal',
      class2: 'notDisplayed'
    }
  }

  onClick() {
    if(!this.state.active) {
      this.setState({
        active: true,
        class1: 'howtoplaymodal',
        class2: 'displayed'
      })
    }
    else {
      this.setState({
        active: false,
        class1: 'howtoplaymodal',
        class2: 'notDisplayed'
      })
    }
  }

  render() {
    return (
      <div>
        <HowToPlay onClick={this.onClick.bind(this)} classes={[this.state.class1, this.state.class2].join(' ')}/>
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
