import React from 'react';
import Redux from 'redux';
import { Card, Hand } from 'components/cards';
import { Deck, deckGetHand } from 'components/cards';
import _ from 'lodash';
import { PokerHand } from '../../../components/cards/poker.js';
import { changeCards } from '../actions/changeCards.js';
import { createGame } from '../actions/createGame.js';
import { toggleCard } from '../actions/toggleCard';
import { showWinner } from '../actions/showWinner';

const game = (state = {}, action) => {
    switch (action.type) {
    case 'START_GAME' :
      return createGame();
    case 'END_GAME' :
      return {};
    case 'SHOW_WINNER' :
      return showWinner(state);
    case 'TOGGLE_CARD' :
      return toggleCard(state, action);
    case 'CHANGE_CARDS':
      return changeCards(state);
    default :
      return state;
  }
  };

export { game };
