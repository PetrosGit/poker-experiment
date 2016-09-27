
import { PokerHand } from '../../../components/cards/poker.js';
import { changeCards, createGame, toggleCard, showWinner } from '../actions/index.js';

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
    default :
      return state;
  }
  };

export { game };
