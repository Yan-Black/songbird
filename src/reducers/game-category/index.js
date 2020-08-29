import { SET_CATEGORY, RESET_CATEGORY } from './constants';

const initialState = {
  category: 'exotic',
};

const categoryReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, category: payload };
    case RESET_CATEGORY:
      return { ...state, category: 'exotic' };
    default: return state;
  }
};

export default categoryReducer;
