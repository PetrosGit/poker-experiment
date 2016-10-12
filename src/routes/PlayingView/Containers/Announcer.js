import { connect } from 'react-redux';
import React from 'react';

let Announcer = ({ announce, winner }) => {
  if (winner) return (
    <div style = { Style.announcementAfter }>
      {winner}
    </div>);
  return (<div style = { Style.anouncementBefore }></div>);
};

Announcer = connect(
  ({ game: { winner } }) => ({
    winner,
  }),
  null,
)(Announcer);

const Style = {
  container: {
  },
  announcementAfter: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 26,
    margin: 30,
    font: 'bold',
  },
  anouncementBefore: {
    margin: 97,
  },
};

export { Announcer };
