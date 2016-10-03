
import { connect } from 'react-redux';
import React from 'react';

let SignIn = ({ onSignIn }) => (
  <button onClick={onSignIn}>SIGN IN</button>
);

SignIn = connect(
  null,
  (dispatch) => ({
    onSignIn: () => dispatch({ type: 'SIGN_IN' }),
  }),
)(SignIn);

export { SignIn };
