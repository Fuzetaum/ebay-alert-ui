import { combineReducers } from 'redux';

import alerts from './alerts';

const finalReducer = combineReducers({
  alerts
});

export default finalReducer;
