
import { connect } from 'react-redux';
import React from 'react';
import { SignIn } from './SignButton';
import { PlayingView } from '../../PlayingView/Containers/PlayingView';

let HomeView = ({ login }) => (
  login ?
  (<PlayingView/>) :
  (<SignIn/>)
);
HomeView = connect(
  ({ user: { login } }) => ({
    login,
  }),
  null,
)(HomeView);

export { HomeView };
