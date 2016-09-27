
import { Hand } from './cards';

const orderWeight = (weights, prefix) => weights.reduce(
  (prefix, weight) => `${prefix}${weight}`,
  prefix
);

const rating = {
  RoyalFlush: {
    is: (hand) => hand.hasInARow(5) && hand.hasOfSameSuit(5) && hand.hasAce(),
    prefix: 'J',
  },
  StraightFlush: {
    is: (hand) => hand.hasInARow(5) && hand.hasOfSameSuit(5),
    prefix: 'I',
  },
  FourOfAKind: {
    is: (hand) => hand.hasOfSameRank(4),
    prefix: 'H',
  },
  FullHouse: {
    is: (hand) => hand.hasOfSameRank(3) && hand.hasOfSameRank(2),
    prefix: 'G',
  },
  Flush: {
    is: (hand) => hand.hasOfSameSuit(5),
    prefix: 'F',
  },
  Straight: {
    is: (hand) => hand.hasInARow(5),
    prefix: 'E',
  },
  ThreeOfAKind: {
    is: (hand) => hand.hasOfSameRank(3),
    prefix: 'D',
  },
  TwoPair: {
    is: (hand) => hand.hasOfSameRank(2) === 2,
    prefix: 'C',
  },
  OnePair: {
    is: (hand) => hand.hasOfSameRank(2),
    prefix: 'B',
  },
  HighCard: {
    is: (hand) => hand.hasOfSameRank(1) === 5,
    prefix: 'A',
  },
};

export class PokerHand extends Hand {
  constructor(cards) {
    super(cards);
    const rate = Object.entries(rating).find(([rate, { is }]) => is(this));
    [this.rate] = rate;
    this.order = orderWeight(this.getOrderedWeights(), rating[this.rate].prefix);
  }

  isHigherThan = (pokerHand) => this.order > pokerHand.order;
  isEqualTo = (pokerHand) => this.order === pokerHand.order;
}

export const orderHands = (...hands) => hands.sort((handOne, handTwo) => (
  handOne.order > handTwo.order ? -1 : handOne.order < handTwo.order ? 1 : 0
));
