import { connect } from 'react-redux';
import React from 'react';

let StartGame = ({ onStartGame }) => (
  <button onClick={onStartGame}>START GAME</button>
);

StartGame = connect(
  null,
  (dispatch) => ({
    onStartGame: () => dispatch({ type: 'START_GAME' }),
  }),
)(StartGame);

export { StartGame };
