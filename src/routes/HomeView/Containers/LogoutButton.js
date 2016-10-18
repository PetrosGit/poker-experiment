import { connect } from 'react-redux';
import React from 'react';

let LogOut = ({ onLogOut }) => (
  <button onClick={onLogOut}>Log Out</button>
);
LogOut = connect(
  null,
  (dispatch) => ({
    onLogOut: () => dispatch({ type: 'LOG_OUT' }),
  }),
)(LogOut);

export { LogOut };
