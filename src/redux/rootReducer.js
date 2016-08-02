import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import startgame from './modules/startgame';
import endgame from './modules/startgame';


export default combineReducers({
  startgame,
  router,
});
