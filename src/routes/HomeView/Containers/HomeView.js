
import { connect } from 'react-redux';
import React from 'react';
import { SignIn } from './SignInButton';
import { SignUp } from './SignUpButton';
import { LogOut } from './LogoutButton';
import { Register } from './RegisterButton';
import { PlayingView } from '../../PlayingView/Containers/PlayingView';
import { CancelReg } from './CancelRegistration';

let HomeView = ({ UserState }) => {
  switch (UserState){
  case 'LoggedIn':
    return (
    <div>
      <PlayingView/>
      <LogOut/>
    </div>
    );
  case 'Register':
    return (
      <div>
        <SignUp/>
        <CancelReg/>
      </div>
    );
  default:
    return (
    <div>
      <SignIn/>
      <Register/>
    </div>
    );
}
};

HomeView = connect(
  ({ user: { UserState } }) => ({
    UserState,
  }),
  null,
)(HomeView);

export { HomeView };
