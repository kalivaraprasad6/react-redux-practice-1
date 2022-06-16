import BurgerReducer from './BurgerKing/BurgerReducer';
import starbucksReducer from './StarBucks/starbucksReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  coffee: starbucksReducer,
  burger: BurgerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
