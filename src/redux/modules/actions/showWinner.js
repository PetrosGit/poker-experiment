
import { PokerHand } from '../../../components/cards/poker.js';

const unselect = (card) => {
  card.selected = false;
};

const showWinner = ({ playerA, playerB }, state) => {
  let aHand = new PokerHand(playerA.hand);
  let bHand = new PokerHand(playerB.hand);
  let chipsA = playerA.chips;
  let chipsB = playerB.chips;
  let winner = '';
  _.map(playerA.hand, unselect);
  console.log(aHand.order, bHand.order);
  if (aHand.order > bHand.order) {
    winner = 'YOU WIN!!!';
    chipsA = playerA.chips + 1;
    chipsB = playerB.chips - 1;
  } else if (aHand.order === bHand.order) {
    winner = 'Draw';
  } else {
    winner = 'You lose';
    chipsA = playerA.chips - 1;
    chipsB = playerB.chips + 1;
  }

  console.log(chipsA);
  return {
    ...state,
    visibility: true,
    usedSwap: true,
    winner,
    playerA: { ...playerA, chips: chipsA },
    playerB: { ...playerB, chips: chipsB },
  };
};

export { showWinner };
