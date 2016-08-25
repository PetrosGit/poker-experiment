import React from 'react';
import Redux from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './homeview.css';
import { Card, Hand } from 'components/cards';
import { Deck, deckGetHand } from 'components/cards';
import _ from 'lodash';
import { StartGame } from './../../routes/HomeView/Containers/StartButton.js';
import { EndGame } from './../../routes/PlayingView/Containers/EndButton.js';
import { ChangeCardsButton } from './../../routes/PlayingView/Containers/ChangeCardsButton.js';
import { PokerHand } from './cards/poker.js';
const changeCards = () => {
  let currentDeck = store.getState().deck;
  let selectedCards = _.filter(store.getState().playerA, (card) => (card.selected));
  let unselectedCards = _.filter(store.getState().playerA, (card) => (!card.selected));
  let newDeal = deckGetHand(currentDeck, selectedCards.length);
  let newHand = unselectedCards.concat(newDeal.hand);
  currentDeck = newDeal.deck;
  alert('cards left ' + currentDeck.length);
  return {
    deck: currentDeck,
    playerA: newHand,
  };
};

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
const createGame = () => {
  let newDeck = Deck();
  let firstDeal = deckGetHand(newDeck, 5);
  let secondDeal = deckGetHand(firstDeal.deck, 5);
  return {
    deck: secondDeal.deck,
    playerA: firstDeal.hand,
    playerB: secondDeal.hand,
  };
};

const onCardClick = (rank, suit, selected) => {
  console.log(selected);
  store.dispatch({
    type: 'TOGGLE_CARD',
    rank,
    suit,
    selected,
  });
};

let PlayingView = ({ playerA, playerB, changeCardsCall }) => (
  playerA ?
  (
    <div>
      <div style={Style.table}>
        <Hand cards={playerA} onCardClick={onCardClick} />
        <Hand cards={playerB} />
      </div>
      <ChangeCardsButton/>
      <EndGame/>
    </div>
  ) : (<StartGame/>)
);
PlayingView = connect(
 ({ playerA, playerB }) => ({
    playerA,
    playerB,
  }),
  null,
)(PlayingView);

const game = (state = {}, action) => {
    switch (action.type) {
    case 'START_GAME' :
      return createGame();
    case 'END_GAME' :
      return {};
    case 'TOGGLE_CARD' :
      let oldHand = state.playerA;
      let newHand = oldHand.map((card)=> {
        if (action.rank == card.rank & action.suit == card.suit) {
          card.selected = !card.selected;
          return card;
        }

        return card;
      });
      console.log(newHand);
      return { ...state, playerA: newHand };
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
export default HomeView;
