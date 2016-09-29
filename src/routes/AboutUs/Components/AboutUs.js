
import React from 'react';

let AboutUs = () => (
      <div style={Style.container}>
        <h3 style={Style.header}>Poker Team</h3>
        <h3 style={Style.contributorTitle}>Supervisor - King</h3>
        <p style={Style.contributors}>Δημήτρης Λιβάς</p>
        <h3 style={Style.contributorTitle}>Programmers - Slaves</h3>
        <p style={Style.contributors}>Χρήστος Τσόπελας</p>
        <p style={Style.contributors}>Πέτρος ΕΠΙΘΕΤΟ !!!!</p>
        <p style={Style.contributors}>Μενέλαος Ζέτας</p>
      </div>
  );

const Style = {
  container: {
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 30,
    margin: 30,
  },
  contributorTitle: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 22,
    color: 'black',
  },
  contributors: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'red',
  },
};

export default AboutUs;
