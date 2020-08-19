import { SET_BIRD, RESET_BIRD } from './constants';

const initialState = {
  bird: '',
};

const birdReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_BIRD:
      return { ...state, bird: payload };
    case RESET_BIRD:
      return { ...state, bird: '' };
    default: return state;
  }
};

export default birdReducer;
