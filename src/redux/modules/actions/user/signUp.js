
import _ from 'lodash';
import { users } from './userList';

const addUser = (users, userID, password) => {
  users[userID] = password;
  console.log(users);
};

let userExists = false;
const SignUP = (state, userID, password, passwordVer) => {
    _.forEach(users, (value, key) => {
      if (userID == key) {
        alert('Invalid UserName');
        userExists = true;
      }

      return userExists;
    });
    if (userExists) {
      return { ...state };
    };

    if (password !== passwordVer) {
      alert('Passwords don`t match');
      return { ...state };
    }

    addUser(users, userID, password);
    alert('Congradulations!');
    return { UserState: 'LoggedIn' };
  };

export { SignUP };
