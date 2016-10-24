
import { connect } from 'react-redux';
import React from 'react';
let userID;
let password;
let passwordVer;
let SignUp = ({ onSubmit }) => (
     <form action="" method="post" enctype="multipart/form-data" onSubmit={onSubmit}>
        <fieldset>
           <label for="userID">User ID:</label>
            <br />
           <input type="text" id="userID" name="userID" placeholder="ID" value={userID}/>
           <br/>
           <label for="password">Password:</label>
            <br />
           <input type="password" id="password" name="password" placeholder="Password" value={password}/>
           <br />
           <label for="passwordVer">Confirm Password:</label>
           <br />
           <input type="password" id="passwordVer" name="passwordVer" placeholder="Password" value={passwordVer}/>
           <br />
           <input type="submit" value="Sign Up" />
        </fieldset>
     </form>
  );

SignUp = connect(
  null,
  (dispatch) => ({
    onSubmit: (e) => {
      e.preventDefault();
      dispatch({ type: 'SIGN_UP',
        payload: {
          userID: e.target.userID.value,
          password: e.target.password.value,
          passwordVer: e.target.passwordVer.value,
        },
      });
    },
  }),
)(SignUp);

export { SignUp };
