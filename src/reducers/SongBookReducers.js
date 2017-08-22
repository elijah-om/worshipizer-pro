import * as types from './action-types';

const initialState = {
    title: "Loading...",
    songs: []
};

const songBookReducer = function(state = initialState, action) {
  // console.log('songBookReducer: ', action);  
  switch(action.type) {
    case types.LOAD_ALL_SONGS:
      return {...state, title: 'loaded', songs: action.payload.songs}
  }
  return state;
}

export default songBookReducer;