
import { connect } from 'react-redux';
import React from 'react';

let NextRound = ({ onNextRound, visibility }) => (
  visibility ?
  (<button onClick={onNextRound}>NEXT ROUND</button>) :
  (<a></a>)
);
NextRound = connect(
  ({ game: { visibility } }) => ({
    visibility,
  }),
  (dispatch) => ({
    onNextRound: () => dispatch({ type: 'START_GAME' }),
  }),
)(NextRound);

export { NextRound };
