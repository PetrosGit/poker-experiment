import _ from 'lodash';

let fullDeck = [
  {rank : '2' , suit : 'diams'},
  {rank : '3' , suit : 'diams'},
  {rank : '4' , suit : 'diams'},
  {rank : '5' , suit : 'diams'},
  {rank : '6' , suit : 'diams'},
  {rank : '7' , suit : 'diams'},
  {rank : '8' , suit : 'diams'},
  {rank : '9' , suit : 'diams'},
  {rank : '10' , suit : 'diams'},
  {rank : 'J' , suit : 'diams'},
  {rank : 'Q' , suit : 'diams'},
  {rank : 'K' , suit : 'diams'},
  {rank : 'A' , suit : 'diams'},
  {rank : '2' , suit : 'spades'},
  {rank : '3' , suit : 'spades'},
  {rank : '4' , suit : 'spades'},
  {rank : '5' , suit : 'spades'},
  {rank : '6' , suit : 'spades'},
  {rank : '7' , suit : 'spades'},
  {rank : '8' , suit : 'spades'},
  {rank : '9' , suit : 'spades'},
  {rank : '10' , suit : 'spades'},
  {rank : 'J' , suit : 'spades'},
  {rank : 'Q' , suit : 'spades'},
  {rank : 'K' , suit : 'spades'},
  {rank : 'A' , suit : 'spades'},
  {rank : '2' , suit : 'hearts'},
  {rank : '3' , suit : 'hearts'},
  {rank : '4' , suit : 'hearts'},
  {rank : '5' , suit : 'hearts'},
  {rank : '6' , suit : 'hearts'},
  {rank : '7' , suit : 'hearts'},
  {rank : '8' , suit : 'hearts'},
  {rank : '9' , suit : 'hearts'},
  {rank : '10' , suit : 'hearts'},
  {rank : 'J' , suit : 'hearts'},
  {rank : 'Q' , suit : 'hearts'},
  {rank : 'K' , suit : 'hearts'},
  {rank : 'A' , suit : 'hearts'},
  {rank : '2' , suit : 'clubs'},
  {rank : '3' , suit : 'clubs'},
  {rank : '4' , suit : 'clubs'},
  {rank : '5' , suit : 'clubs'},
  {rank : '6' , suit : 'clubs'},
  {rank : '7' , suit : 'clubs'},
  {rank : '8' , suit : 'clubs'},
  {rank : '9' , suit : 'clubs'},
  {rank : '10' , suit : 'clubs'},
  {rank : 'J' , suit : 'clubs'},
  {rank : 'Q' , suit : 'clubs'},
  {rank : 'K' , suit : 'clubs'},
  {rank : 'A' , suit : 'clubs'},
];

export function Deck() {
	let newDeck = { ...fullDeck };
	return _.shuffle(newDeck);
};

export function deckGetHand(deck,count) {
  return deck.splice(0, count);
};
