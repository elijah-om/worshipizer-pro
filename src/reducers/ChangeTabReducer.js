import * as types from './action-types';

const initialState = "songs";

const changeTabReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.ACTIVE_TAB_CHANGE:
      return action.payload.tab
  }
  return state;
}

export default changeTabReducer;