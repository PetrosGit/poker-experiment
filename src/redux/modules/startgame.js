import { Deck, deckGetHand } from './deck';
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
const initialState = {};

const toggleCard = (card) => ({...card, completed:!card.completed});

export const createGame = () => {
  let newDeck = Deck();
  let firstDeal = deckGetHand(newDeck, 5);
  let secondDeal = deckGetHand(firstDeal.deck, 5);
  let firstHand = firstDeal.hand;
  let secondHand = secondDeal.hand;
  return {
    deck: secondDeal.deck,
    playerA: firstDeal.hand,
    playerB: secondDeal.hand,
  };
};

const game = (state, action) => {
  switch (action.type) {
    case 'START_GAME' :
      return createGame();
    case 'END_GAME' :
      return {};
    default :
      return state;
  }
};

const store = createStore(game);

export let StartGame = ({ dispatch }) => (
  <button onClick={() => {dispatch({
    type: 'START_GAME',
    });
  }}>
  START GAME
  </button>
);
StartGame = connect()(StartGame);
export let EndGame = ({ dispatch }) => (
  <button onClick={() => {dispatch({
    type: 'END_GAME',
  });
}}>
  END GAME
  </button>
);
EndGame = connect()(EndGame);
