import { SET_TRUE_INDEX, RESET_TRUE_INDEX } from './constants';
import { getRandom } from '../../constants';

const initialState = {
  trueIdx: getRandom(),
};

const trueIndexReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case SET_TRUE_INDEX:
      return { ...state, trueIdx: action.payload };
    case RESET_TRUE_INDEX:
      return { ...state, trueIdx: 0 };
    default: return state;
  }
};

export default trueIndexReducer;
