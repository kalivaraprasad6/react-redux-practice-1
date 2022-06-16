import { BUY_STARBUCKS } from './actionTypes.js';
import { ADD_STARBUCKS } from './actionTypes.js';
export const buyStarBucks = () => {
  return {
    type: BUY_STARBUCKS,
  };
};

export const addStarBucks = () => {
  return {
    type: ADD_STARBUCKS,
  };
};
