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
