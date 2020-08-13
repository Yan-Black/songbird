import { SET_BIRD, RESET_BIRD } from './constants';

export const setBird = (bird) => ({
  type: SET_BIRD,
  payload: bird,
});

export const resetBird = () => ({
  type: RESET_BIRD,
});
