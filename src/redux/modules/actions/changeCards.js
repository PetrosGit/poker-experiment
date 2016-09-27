import { Deck, deckGetHand } from './../../../components/cards/deck.js';
import _ from 'lodash';

const changeCards = (state) => {
  let currentDeck = state.deck;
  let selectedCards = _.filter(state.playerA.hand, (card) => (card.selected));
  let unselectedCards = _.filter(state.playerA.hand, (card) => (!card.selected));
  let newDeal = deckGetHand(currentDeck, selectedCards.length);
  let newHand = unselectedCards.concat(newDeal.hand);
  currentDeck = newDeal.deck;
  return {
    ...state,
    deck: currentDeck,
    playerA: { ...state.playerA, hand: newHand },
    usedSwap: true,
  };
};

export { changeCards };
