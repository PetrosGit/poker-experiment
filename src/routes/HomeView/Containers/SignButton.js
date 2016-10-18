
import { connect } from 'react-redux';
import React from 'react';
let userID;
let password;
let SignIn = ({ onSubmit }) => (
     <form action="" method="post" enctype="multipart/form-data" onSubmit={onSubmit}>
        <fieldset>
           <label for="userID">User ID:</label>
           <input type="text" id="userID" name="userID" placeholder="ID" value={userID}/>
           <br/>
           <label for="password">Last Name:</label>
           <input type="text" id="password" name="password" placeholder="Password" value={password}/>
           <br />
           <input type="submit" value="Post" />
        </fieldset>
     </form>
  );

SignIn = connect(
  null,
  (dispatch) => ({
    onSubmit: (e) => {
      e.preventDefault();
      dispatch({ type: 'SIGN_IN',
        payload: {
          userID: e.target.userID.value,
          password: e.target.password.value,
        },
      });
    },
  }),
)(SignIn);

export { SignIn };
