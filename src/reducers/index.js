//Root Reducer
// Combine all reducers into one big reducer

import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
