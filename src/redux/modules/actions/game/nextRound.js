import { Deck, deckGetHand } from './../../../../components/cards/deck.js';

const unselect = (card) => {
  card.selected = false;
};

const nextRound = (state) => {
  let newDeck = Deck();
  _.map(newDeck, unselect);
  let firstDeal = deckGetHand(newDeck, 5);
  let secondDeal = deckGetHand(firstDeal.deck, 5);
  return {
    deck: secondDeal.deck,
    playerA: { ...state.playerA, hand: firstDeal.hand },
    playerB: { ...state.playerB, hand: secondDeal.hand },
  };
};

export { nextRound };
