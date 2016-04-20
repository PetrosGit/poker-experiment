/* @flow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, doubleAsync } from '../../redux/modules/counter';

import CardsStyle from './cards.css';
import classNames from 'classnames';

let {
  playingCards,
  simpleCards,
  faceImages,
  rotateHand,
  card,
  diams,
  rank,
  suit,
} = CardsStyle;

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function,
};

class Card extends React.Component {
  render() {
    let { ranks, suits } = this.props;
    console.log(this.props);
    console.log(this.props);
    return (
      <div className={
          classNames(
            card,
            CardsStyle['rank-' + ranks],
            CardsStyle[suits])
          }>
        <span className={rank}>{ranks}</span>
        <span className={suit}></span>
      </div>
    );
  }
}

class Hand extends React.Component{
  render() {
    let fullDeck = [
      { rank: 'A', suit: 'spades' },
      { rank: '2', suit: 'spades' },
      { rank: '3', suit: 'spades' },
      { rank: '4', suit: 'spades' },
      { rank: '5', suit: 'spades' },
      { rank: '6', suit: 'spades' },
      { rank: '7', suit: 'spades' },
      { rank: '8', suit: 'spades' },
      { rank: '9', suit: 'spades' },
      { rank: '10', suit: 'spades' },
      { rank: 'J', suit: 'spades' },
      { rank: 'Q', suit: 'spades' },
      { rank: 'K', suit: 'spades' },
      { rank: 'A', suit: 'diams' },
      { rank: '2', suit: 'diams' },
      { rank: '3', suit: 'diams' },
      { rank: '4', suit: 'diams' },
      { rank: '5', suit: 'diams' },
      { rank: '6', suit: 'diams' },
      { rank: '7', suit: 'diams' },
      { rank: '8', suit: 'diams' },
      { rank: '9', suit: 'diams' },
      { rank: '10', suit: 'diams' },
      { rank: 'J', suit: 'diams' },
      { rank: 'Q', suit: 'diams' },
      { rank: 'K', suit: 'diams' },
      { rank: 'A', suit: 'hearts' },
      { rank: '2', suit: 'hearts' },
      { rank: '3', suit: 'hearts' },
      { rank: '4', suit: 'hearts' },
      { rank: '5', suit: 'hearts' },
      { rank: '6', suit: 'hearts' },
      { rank: '7', suit: 'hearts' },
      { rank: '8', suit: 'hearts' },
      { rank: '9', suit: 'hearts' },
      { rank: '10', suit: 'hearts' },
      { rank: 'J', suit: 'hearts' },
      { rank: 'Q', suit: 'hearts' },
      { rank: 'K', suit: 'hearts' },
      { rank: 'A', suit: 'clubs' },
      { rank: '2', suit: 'clubs' },
      { rank: '3', suit: 'clubs' },
      { rank: '4', suit: 'clubs' },
      { rank: '5', suit: 'clubs' },
      { rank: '6', suit: 'clubs' },
      { rank: '7', suit: 'clubs' },
      { rank: '8', suit: 'clubs' },
      { rank: '9', suit: 'clubs' },
      { rank: '10', suit: 'clubs' },
      { rank: 'J', suit: 'clubs' },
      { rank: 'Q', suit: 'clubs' },
      { rank: 'K', suit: 'clubs' },
    ];

    let createHand = function (item) {
      return (<Card ranks={item.ranks} suits={item.suits} />);
    };

    return sample(fullDeck,5).map(createHand);
  }
};

export class HomeView extends React.Component<void, Props, void> {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
  };

  render () {
    console.log(CardsStyle);
    return (
      <div className={classNames(playingCards, simpleCards, faceImages, rotateHand)}>
        <Card ranks='10' suits='clubs'></Card>
        <Hand></Hand>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});
export default connect((mapStateToProps), {
  increment: () => increment(1),
  doubleAsync,
})(HomeView);
