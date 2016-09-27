import { PokerHand } from '../../../components/cards/poker.js';

const showWinner = (state) => {
  let hand1 = new PokerHand(state.playerA.hand);
  let hand2 = new PokerHand(state.playerB.hand);
  console.log(hand1.order, hand2.order, state);
  (hand1.order > hand2.order) ?
    alert('YOU WIN!!!') :
  (hand1.order == hand2.order) ?
    alert('Draw') :
    alert('You lose');
  return {
    ...state,
    visibility: true,
    usedSwap: true,
  };
};

export { showWinner };
