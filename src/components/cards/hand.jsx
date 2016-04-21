import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes from './cards.css';

import { Card } from './card';

export function Hand({ cards }) {
  return (
    <div className={Hand.classNames} style={ Hand.style }>
      {cards.map((card) => {
        const key = card.back ? Hand.BackKeyCount++ : card.rank + card.suit;
        return (
          <Card back={card.back} rank={card.rank} suit={card.suit} key={key}/>
        );
      })}
    </div>
  );
}

Hand.BackKeyCount = 0;

Hand.classNames = classNames(
  classes.playingCards,
  classes.simpleCards,
  classes.faceImages,
  classes.rotateHand,
);

Hand.style = {
  display: 'flex',
  justifyContent: 'center',
};
