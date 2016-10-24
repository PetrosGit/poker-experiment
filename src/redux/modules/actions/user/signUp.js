
import _ from 'lodash';
import { users } from './userList';

const addUser = (users, userID, password) => {
  users[userID] = password;
  console.log(users);
};

const SignUp = (userID, password, passwordVer) => {
    _.forEach(users, (value, key) => {
      if (userID == key) {
        alert('Invalid UserName');
      }
    });
    console.log(password, passwordVer);
    if (password !== passwordVer) {
      alert('Pass');
      return { UserState: 'Register' };
    }
    addUser(users, userID, password);
    alert('Congradulations!');
    return { UserState: 'LoggedIn' };
  };

export { SignUp };
