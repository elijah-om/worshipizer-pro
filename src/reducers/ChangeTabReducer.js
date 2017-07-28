import * as types from '../actions/action-types';

const initialState = "songs";

const ChangeTabReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.ACTIVE_TAB_CHANGE:
      return action.payload
  }
  return state;
}

export default ChangeTabReducer;