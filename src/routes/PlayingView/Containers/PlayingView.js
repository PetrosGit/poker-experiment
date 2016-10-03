import { connect } from 'react-redux';
import React from 'react';
import Redux from 'redux';
import { StartGame } from './StartButton.js';
import { Announcer } from './Announcer.js';
import { EndGame } from './EndButton.js';
import { ChangeCardsButton } from './ChangeCardsButton.js';
import { ShowWinner } from './ShowWinner.js';
import { NextRound } from './NextRound.js';
import { Card, Hand } from './../../../components/cards';
import { SignIn } from './SignButton.js';

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

let PlayingView = ({ playerA, playerB, visibility }) => (
  playerA ?
  (
    <div>
      <div style={Style.table}>
        <Hand cards={playerB.hand} isVisible={visibility}/>
        <Announcer/>
        <Hand cards={playerA.hand} isVisible={true}/>
      </div>
      <ChangeCardsButton />
      <ShowWinner/>
      <NextRound/>
      <EndGame/>
    </div>
  ) : (
    <div>
      <StartGame/>
      <SignIn/>
    </div>
  )
);

PlayingView = connect(
  ({ game: { playerA, playerB, visibility } }) => ({
    playerA,
    playerB,
    visibility,
  }),
  null,
)(PlayingView);

export { PlayingView };
