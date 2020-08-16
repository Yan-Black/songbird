import { createStore, combineReducers } from 'redux';
import indexReducer from 'reducers/game-index';
import statusReducer from 'reducers/game-status';
import resultReducer from 'reducers/game-result';
import birdReducer from 'reducers/game-bird';
import birdDataReducer from 'reducers/game-bird/bird-data';
import trueIndexReducer from 'reducers/game-true-index';
import winReducer from 'reducers/game-win';

const rootReducer = combineReducers({
  game: indexReducer,
  status: statusReducer,
  result: resultReducer,
  bird: birdReducer,
  data: birdDataReducer,
  trueIdx: trueIndexReducer,
  victory: winReducer,
});

const store = createStore(rootReducer);

export default store;
