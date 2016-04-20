import React, { PropTypes } from 'react';

import { Card, Hand } from 'components/cards';

export class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
  };

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
