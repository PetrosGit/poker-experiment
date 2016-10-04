
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { game } from './modules/reducers/gameReducer';
import { user } from './modules/reducers/userReducer';

export default combineReducers({
  user,
  game,
  router,

});
