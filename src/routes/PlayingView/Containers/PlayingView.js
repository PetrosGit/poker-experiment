import { connect } from 'react-redux';
import React from 'react';
import Redux from 'redux';
import { StartGame } from './../../HomeView/Containers/StartButton.js';
import { EndGame } from './EndButton.js';
import { ChangeCardsButton } from './ChangeCardsButton.js';
import { PokerHand } from './../../../views/HomeView/cards/poker.js';
import { ShowWinner } from './ShowWinner.js';
import { NextRound } from './NextRound.js';
import { Card, Hand } from './../../../components/cards';
import { store } from './../../../redux/gameReducer.js';

const Style = {
  container: {
    marginTop: '30px',
    width: '100%',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  title: {
  },
  table: {
    marginTop: '40px',
    textAlign: 'center',
  },
};

const onCardClick = (rank, suit, selected) => {
  console.log(selected);
  store.dispatch({
    type: 'TOGGLE_CARD',
    rank,
    suit,
    selected,
  });
};

let PlayingView = ({ playerA, playerB, changeCards, visibility }) => (
  playerA ?
  (
    <div>
      <div style={Style.table}>
        <Hand cards={playerB.hand} isVisible={visibility}/>
        <Hand cards={playerA.hand} onCardClick={onCardClick} isVisible={true}/>
      </div>
      <ChangeCardsButton />
      <ShowWinner/>
      <NextRound/>
      <EndGame/>
    </div>
  ) : (<StartGame/>)
);
PlayingView = connect(
 ({ playerA, playerB, visibility }) => ({
    playerA,
    playerB,
    visibility,
  }),
  null,
)(PlayingView);

export { PlayingView };
