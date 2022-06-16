import { BUY_STARBUCKS } from './actionTypes';
import { ADD_STARBUCKS } from './actionTypes.js';
const initialState = {
  numOfCoffees: 1000,
};

const starbucksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_STARBUCKS:
      return {
        numOfCoffees: state.numOfCoffees - 1,
      };
    case ADD_STARBUCKS:
      return {
        numOfCoffees: state.numOfCoffees + 1,
      };
    default:
      return state;
  }
};
export default starbucksReducer;
