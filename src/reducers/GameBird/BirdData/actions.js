import { SET_DATA, RESET_DATA } from './constants';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const resetData = () => ({
  type: RESET_DATA,
});
