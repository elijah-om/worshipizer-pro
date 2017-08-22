import * as types from './action-types';

const initialState = {
    openType: "default",
    song: []
};

const songPageReducer = function(state = initialState, action) {
  // console.log('songPageReducer: ', action);
  switch(action.type) {
    case types.OPEN_SONG:
      return {...state, song: action.payload.song}
  }
  return state;
}

export default songPageReducer;