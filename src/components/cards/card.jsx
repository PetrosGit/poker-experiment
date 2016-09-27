
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
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
    onSelect: PropTypes.func,
  };

  handleSelect = () => {
    const { onSelect, card } = this.props;
    onSelect(card);
  };

  renderCard() {
    const { onSelect, card } = this.props;
    const { rank, suit, selected } = card;

    return (
      <span onClick={this.handleSelect} className={className.front(rank, suit)} style={style}s>
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

export default connect(
  null,
  {
    onSelect: ({
      rank,
      suit,
    }) => (dispatch) => dispatch({
      type: 'TOGGLE_CARD',
      rank,
      suit,
    }),
  }
)(Card);
