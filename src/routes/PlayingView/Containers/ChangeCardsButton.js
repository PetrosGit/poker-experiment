import { connect } from 'react-redux';
import React from 'react';


let ChangeCardsButton = ({ changeCardsCall }) => (
  <button onClick={changeCardsCall}>Swap</button>
);
ChangeCardsButton = connect(
 ({ playerA, playerB }) => ({
    playerA,
    playerB,
  }),
 (dispatch) => ({
    changeCardsCall: () => dispatch({
      type: 'CHANGE_CARDS',

    }),
  })
)(ChangeCardsButton);
export { ChangeCardsButton };
