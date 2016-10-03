
import { PokerHand } from '../../../components/cards/poker.js';
import { changeCards, createGame, toggleCard, showWinner, nextRound, signIn } from '../actions/index.js';

const game = (state = {}, action) => {
    switch (action.type) {
    case 'START_GAME' :
      return createGame();
    case 'END_GAME' :
      return {};
    case 'SHOW_WINNER' :
      return showWinner(state);
    case 'TOGGLE_CARD' :
      return toggleCard(state, action);
    case 'CHANGE_CARDS':
      return changeCards(state);
    case 'NEXT_ROUND':
      return nextRound(state);
    case 'SIGN_IN':
      return signIn(state);
    default :
      return state;
  }
  };

export { game };
