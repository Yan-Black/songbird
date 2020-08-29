import { SET_TRUE_INDEX, RESET_TRUE_INDEX } from './constants';

export const setTrueIndex = (idx) => ({
  type: SET_TRUE_INDEX,
  payload: idx,
});

export const resetTrueIndex = () => ({
  type: RESET_TRUE_INDEX,
});
