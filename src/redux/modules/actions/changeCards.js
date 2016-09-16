import { Deck, deckGetHand } from './../../../components/cards/deck.js';
import { store } from './../../gameReducer.js';

const changeCards = () => {
  let currentDeck = store.getState().deck;
  let selectedCards = _.filter(store.getState().playerA.hand, (card) => (card.selected));
  let unselectedCards = _.filter(store.getState().playerA.hand, (card) => (!card.selected));
  let newDeal = deckGetHand(currentDeck, selectedCards.length);
  let newHand = unselectedCards.concat(newDeal.hand);
  currentDeck = newDeal.deck;
  return {
    ...store.getState(),
    deck: currentDeck,
    playerA: { ...store.getState().playerA, hand: newHand },
    usedSwap: true,
  };
};

export { changeCards };
