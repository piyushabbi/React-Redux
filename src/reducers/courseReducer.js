/**
 * Actions are handled in reducer.
 * it accepts a state and an action
 * and returns a new state
 */
export default function courseReducer (state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE': {
      return (
        [...state, Object.assign({}, action.course)]
      );
    }
    default: return state;
  }
}
