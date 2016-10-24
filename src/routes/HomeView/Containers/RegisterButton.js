import { connect } from 'react-redux';
import React from 'react';

let Register = ({ onRegister }) => (
  <button onClick={onRegister}>Register</button>
);
Register = connect(
  null,
  (dispatch) => ({
    onRegister: () => dispatch({ type: 'REGISTER' }),
  }),
)(Register);

export { Register };
