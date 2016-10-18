
import { SignIN } from '../actions/user/signIn.js';

const user = (state = {}, action) => {
      switch (action.type) {
      case 'SIGN_IN' :
        return SignIN(action.payload.userID, action.payload.password);
      default :
        return state;
    }
    };

export { user };
