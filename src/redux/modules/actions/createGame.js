
import { Deck, deckGetHand } from './../../../components/cards/deck.js';

const unselect = (card) => {
  card.selected = false;
};

const createGame = () => {
  let newDeck = Deck();
  _.map(newDeck, unselect);
  let firstDeal = deckGetHand(newDeck, 5);
  let secondDeal = deckGetHand(firstDeal.deck, 5);
  return {
    deck: secondDeal.deck,
    playerA: { hand: firstDeal.hand, chips: 20 },
    playerB: { hand: secondDeal.hand, chips: 20 },
  };
};

export { createGame };
