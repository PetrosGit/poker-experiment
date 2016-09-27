
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { game } from './modules/game/reducer.js';

export default combineReducers({
  game,
  router,

});
