import React from 'react';
import Redux from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './homeview.css';
import { Card, Hand } from 'components/cards';
import { Deck, deckGetHand } from 'components/cards';
import _ from 'lodash';


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
const createGame = () => {
  let newDeck = Deck();
  let firstDeal = deckGetHand(newDeck, 5);
  let secondDeal = deckGetHand(firstDeal.deck, 5);
  return {
    deck: secondDeal.deck,
    playerA: firstDeal.hand,
    playerB: secondDeal.hand,
  };
};
const onCardClick = (rank , suit , selected) => {
  console.log(selected)
  store.dispatch({
    type: 'TOGGLE_CARD',
    rank,
    suit,
    selected,
  })

}
let PlayingView = ({playerA, playerB, changeCards }) => (
  playerA ?
  (
    <div>
      <div style={Style.table}>
        <Hand cards={playerA} onCardClick={onCardClick}/>
        <Hand cards={playerB} />
      </div>
      <button onClick={changeCards}>Swap</button>
      <EndGame/>
    </div>
  ) : (<StartGame/>)
);

PlayingView = connect(
 ({ playerA, playerB }) => ({
    playerA,
    playerB,
  }),
 (dispatch) => ({
    changeCards: () => console.log(store.getState()),
  })
)(PlayingView);

let StartGame = ({ onStartGame }) => (
  <button onClick={onStartGame}>START GAME</button>
);

StartGame = connect(
  null,
  (dispatch) => ({
    onStartGame: () => dispatch({ type: 'START_GAME' }),
  }),
)(StartGame);

const game = (state = {}, action) => {
  switch (action.type) {
    case 'START_GAME' :
      return createGame();
    case 'END_GAME' :
      return {};
    case 'TOGGLE_CARD' : 
     let oldHand = state.playerA;
     let newHand = oldHand.map((card)=>{
      if (action.rank == card.rank & action.suit == card.suit){
        card.selected = !card.selected;
        return card;
      }
      return card;
     });
     console.log(newHand);
     return {...state , playerA:newHand}
    default :
      return state;
  }
};
let EndGame = ({ onEndGame }) => (
  <button onClick={onEndGame}>END GAME</button>
);

EndGame = connect(
  null,
  (dispatch) => ({
    onEndGame: () => dispatch({ type: 'END_GAME' }),
  }),
)(EndGame);

const store = createStore(game);



class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <Provider store = {store}>
        <div style={Style.container}>
          <h1> Five Card Draw Poker </h1>
          <PlayingView/>
        </div>
      </Provider>
    );
  }

}

export default HomeView;
