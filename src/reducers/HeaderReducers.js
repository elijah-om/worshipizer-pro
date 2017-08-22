import * as types from './action-types';

const initialState = {
    title: "Songs",
    leftButton: 'edit',
    rightButton: 'add',
    editMode: false
};

const headerReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.ACTIVE_TAB_CHANGE:
      return {...state, title: action.payload.tab[0].toUpperCase() + action.payload.tab.substr(1)}
  }
  return state;
}

export default headerReducer;