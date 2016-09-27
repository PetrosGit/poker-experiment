
import _ from 'lodash';
import { maxInARow } from './utils';

const Ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
const Suits = [ 'hearts', 'clubs', 'diams', 'spades' ];

export class Deck {
  constructor() {
    const cards = [];
    for (const [ weight, rank ] of Ranks.entries()) {
      for (const suit of Suits) {
        cards.push({ suit, rank, weight: String.fromCharCode(weight + 65) });
      }
    }
    this.cards = _.shuffle(cards);
  }

  give(numOfCards = 1) {
    return this.cards.splice(0, numOfCards);
  }
}

export class Hand {
  constructor(cards) {
    this.cards = _.sortBy(cards, 'weight').reverse();
    this.ranks = _.groupBy(this.cards, 'rank');
    this.suits = _.groupBy(this.cards, 'suit');
    this.rankTimes = _.groupBy(this.ranks, 'length');
    this.suitTimes = _.groupBy(this.suits, 'length');
    this.maxInARow = maxInARow(_.map(this.cards, 'weight'));

    this.orderedWeights = _(this.ranks)
    .map((cardGroup) => ({ length: cardGroup.length, weight: cardGroup[0].weight }))
    .sortBy(({length, weight}) => `${length}${weight}`)
    .map('weight')
    .reverse()
    .value();
  }

  getOrderedWeights = () => this.orderedWeights;

  getOfSameRank = (n) => this.rankTimes[n] || [];

  getOfSameSuit = (n) => this.suitTimes[n] || [];

  hasAce = () =>  !!this.ranks['A'];

  hasOfSameRank = (n) => this.getOfSameRank(n).length;

  hasOfSameSuit = (n) => this.getOfSameSuit(n).length;

  hasInARow = (n) => this.maxInARow >= n;

  getWorstSingles = () => _.sortBy(_.flatten(this.getOfSameRank(1)), 'weight');
}
