
import React from 'react';
import Redux from 'redux';
import '../views/HomeView/homeview.css';
import { HomeView } from './HomeView/Containers/HomeView.js';

const Style = {
      marginTop: '30px',
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
    };

class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div style={Style}>
          <h1> Five Card Draw Poker </h1>
          <HomeView/>
        </div>
    );
  }
}

export { View };
