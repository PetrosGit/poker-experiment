import { connect } from 'react-redux';
import React from 'react';
import Redux from 'redux';

let ChangeCardsButton = ({ changeCardsCall, usedSwap }) => (
  usedSwap ?
  (<a></a>) :
  (<button onClick={changeCardsCall}>Swap</button>)
);
ChangeCardsButton = connect(
 ({ game: { playerA, playerB, usedSwap } }) => ({
    playerA,
    playerB,
    usedSwap,
  }),
 (dispatch) => ({
    changeCardsCall: () => dispatch({
      type: 'CHANGE_CARDS',
    }),
  })
)(ChangeCardsButton);
export { ChangeCardsButton };
