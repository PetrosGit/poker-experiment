
import { SignIN } from '../actions/user/signIn.js';
import { SignUp } from '../actions/user/signUp.js';

const user = (state = {}, action) => {
      switch (action.type) {
      case 'SIGN_IN' :
        return SignIN(action.payload.userID, action.payload.password);
      case 'SIGN_UP':
        return SignUp(action.payload.userID, action.payload.password, action.payload.passwordVer);
      case 'LOG_OUT' :
        return {};
      case 'REGISTER' :
        return { UserState: 'Register' };
      default :
        return state;
    }
    };

export { user };
