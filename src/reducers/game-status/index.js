import { SET_SOLVED, SET_TO_INITIAL } from './constants';

const initialState = {
  isSolved: false,
};

const statusReducer = (
  state = initialState,
  { type },
) => {
  switch (type) {
    case SET_SOLVED:
      return { ...state, isSolved: true };
    case SET_TO_INITIAL:
      return { ...state, isSolved: false };
    default: return state;
  }
};

export default statusReducer;
