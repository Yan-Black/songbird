import { UPDATE_INDEX, RESET_INDEX } from './constants';

export const updateIndex = () => ({
  type: UPDATE_INDEX,
});

export const resetIndex = () => ({
  type: RESET_INDEX,
});
