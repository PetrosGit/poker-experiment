import { connect } from 'react-redux';
import React from 'react';

let EndGame = ({ onEndGame }) => (
  <button onClick={onEndGame}>END GAME</button>
);
EndGame = connect(
  null,
  (dispatch) => ({
    onEndGame: () => dispatch({ type: 'END_GAME' }),
  }),
)(EndGame);

export { EndGame };
