import update from 'immutability-helper';
import { SET_DATA, RESET_DATA } from './constants';

const initialState = {
  audio: '',
  description: '',
  name: '****',
  image: '',
  species: '',
};

const birdDataReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_DATA:
      return update(state, { $set: payload });
    case RESET_DATA:
      return update(state, { $set: initialState });
    default: return state;
  }
};

export default birdDataReducer;
