import { connect } from 'react-redux';
import React from 'react';

let Announcer = ({ announce, winner }) => (
  <div style = { Style.announcement }>
    {winner}
  </div>
);
Announcer = connect(
  ({ game: { winner } }) => ({
    winner,
  }),
  null,
)(Announcer);

const Style = {
  container: {
  },
  announcement: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 26,
    margin: 30,
    font: 'bold',
  },
};

export { Announcer };
