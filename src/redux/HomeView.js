
import React from 'react';
import Redux from 'redux';
import '../views/HomeView/homeview.css';
import { PlayingView } from './../routes/PlayingView/Containers/PlayingView.js';

const Style = {
      marginTop: '30px',
      width: '100%',
      justifyContent: 'center',
      marginLeft: '5%',
    };

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div style={Style}>
          <h1> Five Card Draw Poker </h1>
          <PlayingView/>
        </div>
    );
  }
}

export { HomeView };
