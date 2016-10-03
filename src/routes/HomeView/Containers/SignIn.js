import { connect } from 'react-redux';
import React from 'react';

let SignIn = ({ onSubmit }) => (
<form name="myForm" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname"/>
  Password: <input type="text" name="pass"/>
  <input type="submit" value="Submit"/>
</form>
);

Login = connect(
  null,
  (dispatch) => ({
    onSubmit: () => dispatch({ type: 'SIGN_IN' }),
  }),
)(SignIn);

export { SignIn };
