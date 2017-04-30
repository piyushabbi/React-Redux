/**
 * Actions are handled in reducer.
 * it accepts a state and an action
 * and returns a new state
 */
import * as types from '../actions/actionTypes';

export default function courseReducer (state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE : {
      return (
        [...state, Object.assign({}, action.course)]
      );
    }
    default: return state;
  }
}
