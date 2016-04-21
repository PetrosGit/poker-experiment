import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes from './cards.css';

import { Card } from './card';

export function Hand({ cards }) {
  return (
    <div className={Hand.classNames} style={Hand.style}>
      {cards.map((card) => (
        <Card {...card} key={Hand.key(card)}/>
      ))}
    </div>
  );
}

Hand.BackKeyCount = 0;

Hand.key = (card) => (
  card.back ? `back-card-${Hand.BackKeyCount++}` : card.rank + card.suit
);

Hand.classNames = classNames(
  classes.playingCards,
  classes.simpleCards,
  classes.faceImages,
  classes.rotateHand,
);

Hand.style = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};
