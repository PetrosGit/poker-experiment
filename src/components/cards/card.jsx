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
    rank: PropTypes.string,
    suit: PropTypes.string,
    back: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };

    this.onClick = () => {
      this.setState({
        selected: !this.state.selected,
      });
    };
  }

  renderCard() {
    const { rank, suit, back } = this.props;
    if (back === true) {
      return (
        <div onClick={this.onClick} className={className.back} style={style}>*</div>
      );
    }

    return (
      <span onClick={this.onClick} className={className.front(rank, suit)} style={style}>
        <span className={classes.rank}>{rank}</span>
        <span className={classes.suit}></span>
      </span>
    );
  }

  render() {
    const card = this.renderCard();
    return (
      this.state.selected ? <strong children={card} /> : card
    );
  }
}

export { Card };
