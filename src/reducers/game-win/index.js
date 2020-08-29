import { SET_WIN, SET_INITIAL } from './constants';

const initialState = {
  isWin: false,
};

const winReducer = (
  state = initialState,
  { type },
) => {
  switch (type) {
    case SET_WIN:
      return { ...state, isWin: true };
    case SET_INITIAL:
      return { ...state, isWin: false };
    default: return state;
  }
};

export default winReducer;
