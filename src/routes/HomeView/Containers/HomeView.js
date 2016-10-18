
import { connect } from 'react-redux';
import React from 'react';
import { SignIn } from './SignButton';
import { LogOut } from './LogoutButton';
import { PlayingView } from '../../PlayingView/Containers/PlayingView';

let HomeView = ({ login }) => (
  login ?
  (
  <div>
    <PlayingView/>
    <LogOut/>
  </div>) :
  (<SignIn/>)
);
HomeView = connect(
  ({ user: { login } }) => ({
    login,
  }),
  null,
)(HomeView);

export { HomeView };
