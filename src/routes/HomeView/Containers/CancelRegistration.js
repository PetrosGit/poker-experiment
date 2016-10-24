import { connect } from 'react-redux';
import React from 'react';

let CancelReg = ({ onCancel }) => (
  <button onClick={onCancel}>Cancel</button>
);
CancelReg = connect(
  null,
  (dispatch) => ({
    onCancel: () => dispatch({ type: 'CANCEL_REG' }),
  }),
)(CancelReg);

export { CancelReg };
