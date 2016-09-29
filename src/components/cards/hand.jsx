
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes, {
  playingCards,
  simpleCards,
  rotateHand,
} from './cards.css';
import Card from './card';
import cardStyles from  './cards.css';

let backKeyCount = 0;

const key = (card) => (
  card.back ? `hand-card-${backKeyCount++}` : card.rank + card.suit
);

const className = classNames(playingCards, simpleCards, rotateHand);

const style = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

export function Hand({ cards, onCardClick, isVisible = false }) {
  return (
    isVisible ?
    (<div className={className} style={style}>
      {cards.map((card) => (
        <Card
        card={card}
        onClick={() => onCardClick(card.rank, card.suit, card.selected)}
        key={key(card)} />
      ))}
    </div>) :
    (<div className={className} style={style}>
      {cards.map(() =>(
        <div className={classNames(cardStyles.card, cardStyles.back)}>*</div>
      ))}
    </div>)
  );
  alert('aaaa');
};
