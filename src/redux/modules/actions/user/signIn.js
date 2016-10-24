import _ from 'lodash';
import { users } from './userList';

const SignIN = (userID, password) => {
    console.log(users);
    let validation = false;
    let error = 'Wrong ID';
    _.forEach(users, (value, key) => {
      if (userID == key) {
        if (password == value) {
          validation = true;
        };

        error = 'WrongPass';
      };

    });
    if (validation) {
      return ({ UserState: 'LoggedIn' });
    };

    alert(error);
    return {};
  };

export { SignIN };
