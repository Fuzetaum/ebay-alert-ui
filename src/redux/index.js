import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducer';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composedEnhancers(applyMiddleware(reduxThunk)));

export default store;
