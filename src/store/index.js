import { createStore, combineReducers } from 'redux';
import indexReducer from '../reducers/GameIndex';
import statusReducer from '../reducers/GameStatus';
import resultReducer from '../reducers/GameResult';
import birdReducer from '../reducers/GameBird';
import birdDataReducer from '../reducers/GameBird/BirdData';
import trueIndexReducer from '../reducers/GameTrueIndex';

const rootReducer = combineReducers({
  game: indexReducer,
  status: statusReducer,
  result: resultReducer,
  bird: birdReducer,
  data: birdDataReducer,
  trueIdx: trueIndexReducer,
});

const store = createStore(rootReducer);

export default store;
