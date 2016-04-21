import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes from './cards.css';

export function Card({ rank, suit, back }) {
  if (back === true) {
    return (<div className={Card.className.back} style={Card.style}>*</div>);
  } else {
    return (
      <div className={Card.className.front(rank, suit)} style={Card.style}>
        <span className={classes.rank}>{rank}</span>
        <span className={classes.suit}></span>
      </div>
    );
  }
}

Card.className =  {
  front: (rank, suit) => classNames(
    classes.card,
    classes['rank-' + rank.toLowerCase()],
    classes[suit],
  ),
  back: classNames(classes.card, classes.back),
};

Card.style = {
};
