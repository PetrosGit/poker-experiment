import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { game } from './gameReducer.js';

export default combineReducers({
  game,
  router,

});
