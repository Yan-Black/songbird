import { UPDATE_SCORE, RESET_SCORE } from './constants';

const initialState = {
  score: 0,
};

const resultReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return { ...state, score: state.score + action.payload };
    case RESET_SCORE:
      return { ...state, score: 0 };
    default: return state;
  }
};

export default resultReducer;
