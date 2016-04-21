import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Style from './cards.css';

export function Card({ rank, suit }) {
  return (
    <div className={Card.Style(rank, suit)}>
      <span className={Style.rank}>{rank}</span>
      <span className={Style.suit}></span>
    </div>
  );
}

Card.Style = (rank, suit) => classNames(
  Style.card,
  Style['rank-' + rank.toLowerCase()],
  Style[suit],
);

export function Hand({ cards }) {
  return (
    <div className={Hand.Style}>
      {cards.map((card) => (
        <Card rank={card.rank} suit={card.suit} key={`${card.rank}${card.suit}`}/>
      ))}
    </div>
  );
}




export function BackHand(){
  return(
  <div className={Hand.Style}>
    <div className="card back">*</div>
    <div className="card back">*</div>
    <div className="card back">*</div>
    <div className="card back">*</div>
    <div className="card back">*</div>
  </div>
  );
}

Hand.Style = classNames(
  Style.playingCards,
  Style.simpleCards,
  Style.faceImages,
  Style.rotateHand
);
