import React from 'react';
import './homeview.css';
import { Card, Hand } from 'components/cards';
import { Deck, deckGetHand } from 'components/cards';
import _ from 'lodash';

const Style = {
  container: {
    marginTop: '30px',
    width: '100%',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  title: {
  },
  table: {
    marginTop: '40px',
    textAlign: 'center',

  },
};

class PlayingView extends React.Component {
  constructor(props) {
    super(props);
    const deck =  Deck();
    this.state = {
      deck,
      playerA: deckGetHand(deck, 5),
      playerB: deckGetHand(deck, 5),
    };
  }
  changeCards(){
    _.filter(PlayingView.state.playerB,function(){return Card.state.selected ;})
  };
  

  render() {
    return (
      <div style={Style.table}>
        <Hand cards={this.state.playerA} />
        <Hand cards={this.state.playerB} /> 
      </div>
      <button onClick={this.changeCards}>Swap</button>
    );
  }
}

class WelcomeView extends React.Component {
  render() {
    return (
      <h3 style={Style.table}>
        Start your new Game!!!
      </h3>
    );
  }
}

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playingView: false,
    };

    this.onClick = () => {
      this.setState({
        playingView: !this.state.playingView,
      });
    };
  }
  
  

  renderStartGameButton() {
    return (
      <span>
        Start Game
      </span>
    );
  }

  renderEndGameButton() {
    return (
      <span>
        End Game
      </span>
    );
  }

  render () {
    const view = this.state.playingView
    ? <PlayingView />
    : <WelcomeView />;
    const buttonContent = this.state.playingView
    ? this.renderEndGameButton()
    : this.renderStartGameButton();

    return (
      <div style={Style.container}>
        <h1> Five Card Draw Poker </h1>

        {view}
        <button onClick={this.onClick}>{buttonContent}</button>
      </div>
    );
  }

}

export default HomeView;


