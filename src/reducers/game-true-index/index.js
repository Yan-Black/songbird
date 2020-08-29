import { getRandom } from '@constants';
import { SET_TRUE_INDEX, RESET_TRUE_INDEX } from './constants';

const initialState = {
  trueIdx: getRandom(),
};

const trueIndexReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_TRUE_INDEX:
      return { ...state, trueIdx: payload };
    case RESET_TRUE_INDEX:
      return { ...state, trueIdx: 0 };
    default: return state;
  }
};

export default trueIndexReducer;
