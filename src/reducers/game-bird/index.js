import { SET_BIRD, RESET_BIRD } from './constants';

const initialState = {
  bird: '',
};

const birdReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case SET_BIRD:
      return { ...state, bird: action.payload };
    case RESET_BIRD:
      return { ...state, bird: '' };
    default: return state;
  }
};

export default birdReducer;
