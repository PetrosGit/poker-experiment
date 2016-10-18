
import _ from 'lodash';

const users = {
  petros: '1234',
  christos: '12345',
  menelaos: '123',
};
let validation = false;
const SignIN = (userID, password) => {
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
      return ({ login: true });
    };

    alert(error);
    return {};
  };

export { SignIN };
