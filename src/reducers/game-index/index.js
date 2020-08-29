import { UPDATE_INDEX, RESET_INDEX } from './constants';

const initialState = {
  activeIndex: 0,
};

const indexReducer = (
  state = initialState,
  { type },
) => {
  switch (type) {
    case UPDATE_INDEX:
      return { ...state, activeIndex: state.activeIndex + 1 };
    case RESET_INDEX:
      return { ...state, activeIndex: 0 };
    default: return state;
  }
};

export default indexReducer;
