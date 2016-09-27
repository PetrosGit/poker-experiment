
const Ranks = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
];

const Suits = ['diams', 'spades', 'hearts', 'clubs'];
let fullDeck = [];

for (const [weight, rank] of Ranks.entries()) {
  for (const suit of Suits) {
    fullDeck.push({ suit, rank, weight: String.fromCharCode(weight + 65) });
  };
};

export function Deck() {
  let newDeck = { ...fullDeck };
  return _.shuffle(newDeck);
};

export function deckGetHand(deck, count) {
  let newDeck = { deck: deck.slice(count), hand: deck.slice(0, count) };
  return newDeck;
};
