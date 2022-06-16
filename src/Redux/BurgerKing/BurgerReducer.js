import { BUY_BURGER, ADD_BURGER } from './actionTypes';

const initialState = {
  numOfBurgers: 1500,
};

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        numOfBurgers: state.numOfBurgers - 1,
      };
    case ADD_BURGER:
      return {
        numOfBurgers: state.numOfBurgers + 1,
      };
    default:
      return state;
  }
};
export default BurgerReducer;
