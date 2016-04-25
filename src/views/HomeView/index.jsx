import React from 'react';
import './homeview.css';
import {StartButton} from 'components/buttons';

import { Card, Hand } from 'components/cards';

const Style = {
  container: {
    marginTop: '30px',
    width: '100%',
  },
  title: {
  },
  table: {
    marginTop: '40px',
  },
};

class HomeView extends React.Component {
  render () {
  	if (StartButton.selected === false){
  		return (<div style={Style.container}>
  					<h1> Five Card Draw Poker </h1>
  					<Startbutton />
  				</div>);
  	}
    return (
      <div style={Style.container}>
        <h1> Five Card Draw Poker </h1>
        <div style={Style.table}>
          <Hand cards={[
            { back: true },
            { back: true },
            { back: true },
            { back: true },
            { back: true },
          ]} />
          <Hand cards={[
            { rank:'Q', suit:'diams' },
            { rank:'J', suit:'diams' },
            { rank:'10', suit:'clubs' },
            { rank:'9', suit:'diams' },
            { rank:'8', suit:'diams' },
          ]} />
        </div>
        <StartButton/>
      </div>
    );
  }
}

export default HomeView;
