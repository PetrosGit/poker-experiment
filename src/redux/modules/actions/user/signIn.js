
import _ from 'lodash';

const users = ['petros', 'christos'];
const SignIN = (user, password) => {
  console.log(user);
  console.log(password);
  return { login: true };
};

export { SignIN };
