import React, { PropTypes } from 'react';
import classNames from 'classnames';
import classes, {
  playingCards,
  simpleCards,
  rotateHand,
} from './cards.css';
import { store } from '../../views/HomeView/index'
import { Card } from './card';

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
const onCardClick = () => {
  console.log('-----')
  store.dispatch({
    type: 'TOGGLE_CARD',
    rank,
    suit,
    selected,
  })
}

export function Hand({ cards , onCardClick }) {
  return (
    <div className={className} style={style}>
      {cards.map((card) => (
        <Card card={card} onClick={onCardClick} key={key(card)} />
      ))}
    </div>
  );
};
