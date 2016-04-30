import React from 'react';
import { StartButton } from 'components/buttons';
import { Card, Hand , DeckNewHand } from 'components/cards';
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
  render () {
    return (
      <div style={Style.table}>
        <Hand cards={[
          { back: true },
          { back: true },
          { back: true },
          { back: true },
          { back: true },
        ]} />
        <Hand cards={[
          { rank:'Q', suit:'diams' },
          { rank:'J', suit:'diams' },
          { rank:'10', suit:'clubs' },
          { rank:'9', suit:'diams' },
          { rank:'8', suit:'diams' },
        ]} />
        <deckNewHand/>
      </div>
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


