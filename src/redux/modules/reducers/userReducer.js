
const user = (state = {}, action) => {
    switch (action.type) {
      case 'SIGN_IN' :
        return { ...state, login: true };
      default :
        return state;
    }
  };

export { user };
