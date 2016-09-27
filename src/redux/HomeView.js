
import React from 'react';
import Redux from 'redux';
import '../views/HomeView/homeview.css';
import { PlayingView } from './../routes/PlayingView/Containers/PlayingView.js';

const Style = {
    container: {
      marginTop: '30px',
      width: '100%',
      justifyContent: 'center',
      marginLeft: '5%',
    },
    title: {
    },
    table: {
      marginTop: '40px',
      textAlign: 'center',
    },
  };

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div style={Style.container}>
          <h1> Five Card Draw Poker </h1>
          <PlayingView/>
        </div>
    );
  }
}

export { HomeView };
