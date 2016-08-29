import { connect } from 'react-redux';
import React from 'react';

let ShowWinner = ({ onEndRound, visibility }) => (
  visibility ?
  (<a></a>) :
  (<button onClick={onEndRound}>SHOW WINNER</button>)
);
ShowWinner = connect(
  ({ visibility }) => ({
    visibility,
  }),
  (dispatch) => ({
    onEndRound: () => dispatch({ type: 'SHOW_WINNER' }),
  }),
)(ShowWinner);

export { ShowWinner };
