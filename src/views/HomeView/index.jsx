import React from 'react';
import './homeview.css';

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
    width: '350px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

class HomeView extends React.Component {
  render () {
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
            { rank:'10', suit:'diams' },
            { rank:'9', suit:'diams' },
            { rank:'8', suit:'diams' },
          ]} />
        </div>
      </div>
    );
  }
}

export default HomeView;
