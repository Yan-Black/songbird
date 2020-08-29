import { SET_CATEGORY, RESET_CATEGORY } from './constants';

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const resetCategory = () => ({
  type: RESET_CATEGORY,
});
