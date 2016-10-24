
import { SignIN } from '../actions/user/signIn.js';
import { SignUP } from '../actions/user/signUp.js';

const user = (state = {}, action) => {
      switch (action.type) {
      case 'SIGN_IN' :
        return SignIN(state, action.payload.userID, action.payload.password);
      case 'SIGN_UP':
        return SignUP(state, action.payload.userID, action.payload.password, action.payload.passwordVer);
      case 'LOG_OUT' :
        return {};
      case 'REGISTER' :
        return { UserState: 'Register' };
      case 'CANCEL_REG':
        return {};
      default :
        return state;
    }
    };

export { user };
