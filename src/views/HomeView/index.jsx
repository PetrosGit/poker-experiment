import React from 'react';

import { Card, Hand } from 'components/cards';

export default class HomeView extends React.Component {
  render () {
    return (
      <Hand cards={[
          { rank:'10', suit:'diams' },
          { rank:'9', suit:'diams' },
          { rank:'8', suit:'diams' },
        ]}/>
    );
  }
}
