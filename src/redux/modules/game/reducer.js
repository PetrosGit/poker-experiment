import React from 'react';
import Redux from 'redux';
import { Card, Hand } from 'components/cards';
import { Deck, deckGetHand } from 'components/cards';
import _ from 'lodash';
import { PokerHand } from '../../../components/cards/poker.js';
import { changeCards } from '../actions/changeCards.js';
import { createGame } from '../actions/createGame.js';

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
      return changeCards(state);
    default :
      return state;
  }
  };

export { game };
