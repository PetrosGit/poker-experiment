import React from 'react';
import Redux from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './../views/HomeView/homeview.css';
import { Card, Hand } from 'components/cards';
import { Deck, deckGetHand } from 'components/cards';
import _ from 'lodash';
import { PlayingView } from './../routes/PlayingView/Containers/PlayingView.js';
import { PokerHand } from './../views/HomeView/cards/poker.js';
import { changeCards } from './modules/actions/changeCards.js';
import { createGame } from './modules/actions/createGame.js';

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

const game = (state = {}, action) => {
    switch (action.type) {
    case 'START_GAME' :
      return createGame();
    case 'END_GAME' :
      console.log(state);
      return {};
    case 'SHOW_WINNER' :
      let hand1 = new PokerHand(state.playerA.hand);
      let hand2 = new PokerHand(state.playerB.hand);
      console.log(hand1.order, hand2.order, state);
      (hand1.order > hand2.order) ?
        alert('YOU WIN!!!') :
      (hand1.order == hand2.order) ?
        alert('Draw') :
        alert('You lose');
      return {
        ...state,
        visibility: true,
        usedSwap: true,
      };
    case 'TOGGLE_CARD' :
      let oldHand = state.playerA.hand;
      let newHand = oldHand.map((card)=> {
        if (action.rank == card.rank & action.suit == card.suit) {
          card.selected = !card.selected;
          return card;
        }

        return card;
      });
      console.log(newHand);
      return { ...state, playerA: { ... state.playerA, hand: newHand } };
    case 'CHANGE_CARDS':
      return changeCards();
    default :
      return state;
  }
  };

const store = createStore(game);
class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Provider store = {store}>
        <div style={Style.container}>
          <h1> Five Card Draw Poker </h1>
          <PlayingView/>
        </div>
      </Provider>
    );
  }
}

export { HomeView, store, game };
