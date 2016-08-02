import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import classes from './cards.css';

const className =  {
  front: (rank, suit) => classNames(
    classes.card,
    classes['rank-' + rank.toLowerCase()],
    classes[suit],
  ),
  back: classNames(classes.card, classes.back),
};

const style = {
};

class Card extends Component {
  static propTypes = {
    card: PropTypes.object,
  };

  renderCard() {
    const { rank, suit, selected } = this.props.card;
    const onClick = this.props.onClick;



    return (
      <span onClick={onClick} className={className.front(rank, suit)} style={style}s>
        <span className={classes.rank}>{rank}</span>
        <span className={classes.suit}></span>
      </span>
    );
  }

  render() {
    const card = this.renderCard();
    return (
      this.props.card.selected ? <strong children={card} /> : card
    );
  }
}

export { Card };
