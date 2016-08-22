import StartGame as start from './StartButton.js';
import {connect} from 'react-redux';

StartGame = connect(
  null,
  (dispatch) => ({
    onStartGame: () => dispatch({ type: 'START_GAME' }),
  }),
)(start);

export { StartGame };
