
import React from 'react';

const Help = () => (
  <div style={ Style.container }>
    <h3 style={ Style.header }>Game Rules:</h3>
      <ul style={ Style.list }>
        <li>You can select cards from your hand in order to change them with new ones from the deck.</li>
        <li>The winner of the round is determined from the rules of the poker game Five Card Draw.
        See rules <a href="https://en.wikipedia.org/wiki/Five-card_draw#House_rules">here</a></li>
      </ul>
  </div>
  );

const Style = {
  container: {
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    margin: 30,
  },
  list: {
    textAlign: 'left',
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
  },
};

export default Help;
