import BurgerReducer from './BurgerKing/BurgerReducer';
import starbucksReducer from './StarBucks/starbucksReducer';
import pizzaReducer from './Pizza/pizzaReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  coffee: starbucksReducer,
  burger: BurgerReducer,
  pizza: pizzaReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
