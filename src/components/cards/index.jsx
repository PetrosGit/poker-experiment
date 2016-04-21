import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Style from './cards.css';

export function Card({ rank, suit, back }) {
  if (back === true) {
    return (<div className={Card.Style.back}>*</div>);
  } else {
    return (
      <div className={Card.Style.front(rank, suit)}>
        <span className={Style.rank}>{rank}</span>
        <span className={Style.suit}></span>
      </div>
    );
  }
}

Card.Style =  {
  front: (rank, suit) => classNames(
    Style.card,
    Style['rank-' + rank.toLowerCase()],
    Style[suit],
  ),
  back: classNames(Style.card, Style.back),
};

export function Hand({ cards }) {
  return (
    <div className={Hand.Style}>
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

Hand.Style = classNames(
  Style.playingCards,
  Style.simpleCards,
  Style.faceImages,
  Style.rotateHand,
);
