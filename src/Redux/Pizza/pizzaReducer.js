import { BUY_PIZZA, ADD_PIZZA } from './actionTypes';

const initialState = {
  noOfPizza: 100,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIZZA:
      return {
        noOfPizza: state.noOfPizza - 1,
      };
    case ADD_PIZZA:
      return {
        noOfPizza: state.noOfPizza + 1,
      };
    default:
      return state;
  }
};
export default pizzaReducer;
