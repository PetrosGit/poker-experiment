import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes, {
  playingCards,
  simpleCards,
  rotateHand,
} from './cards.css';

import { Card } from './card';

let backKeyCount = 0;

const key = (card) => (
  card.back ? `back-card-${backKeyCount++}` : card.rank + card.suit
);

const className = classNames(playingCards, simpleCards, rotateHand);

const style = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

export function Hand({ cards }) {
  return (
    <div className={className} style={style}>
      {cards.map((card) => (
        <Card {...card} key={key(card)}/>
      ))}
    </div>
  );
}
