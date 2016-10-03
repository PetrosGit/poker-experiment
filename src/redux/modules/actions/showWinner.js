
import { PokerHand } from '../../../components/cards/poker.js';

const showWinner = ({ playerA, playerB }, state) => {
  let aHand = new PokerHand(playerA.hand);
  let bHand = new PokerHand(playerB.hand);
  let chipsA = playerA.chips;
  let chipsB = playerB.chips;
  console.log(aHand.order, bHand.order);
  if (aHand.order > bHand.order) {
    alert('YOU WIN!!!');
    chipsA = playerA.chips + 1;
    chipsB = playerB.chips - 1;
  } else if (aHand.order === bHand.order) {
    alert('Draw');
  } else {
    alert('You lose');
    chipsA = playerA.chips - 1;
    chipsB = playerB.chips + 1;
  }

  console.log(chipsA);
  return {
    ...state,
    visibility: true,
    usedSwap: true,
    playerA: { ...playerA, chips: chipsA },
    playerB: { ...playerB, chips: chipsB },
  };
};

export { showWinner };
