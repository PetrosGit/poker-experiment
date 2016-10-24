
import { connect } from 'react-redux';
import React from 'react';
import { SignIn } from './SignInButton';
import { SignUp } from './SignUpButton';
import { LogOut } from './LogoutButton';
import { Register } from './registerButton';
import { PlayingView } from '../../PlayingView/Containers/PlayingView';

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
    return (<SignUp/>);
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
