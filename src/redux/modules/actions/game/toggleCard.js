
const toggleCard = (state, action) => {
  let oldHand = state.playerA.hand;
  let newHand = oldHand.map((card)=> {
    if (action.rank == card.rank & action.suit == card.suit) {
      card.selected = !card.selected;
      return card;
    }

    return card;
  });
  return { ...state, playerA: { ... state.playerA, hand: newHand } };
};

export { toggleCard };
