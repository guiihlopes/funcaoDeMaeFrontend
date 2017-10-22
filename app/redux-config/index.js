import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

export default (initialState = {}) => {
  let enchancers = applyMiddleware(thunkMiddleware);
  if (NODE_ENV !== 'production' && NODE_ENV !== 'qa') {
    enchancers = composeWithDevTools(enchancers);
  }
  const store = createStore(reducers, initialState, enchancers);
  return store;
};
