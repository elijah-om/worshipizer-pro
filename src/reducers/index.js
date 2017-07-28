import { combineReducers } from 'redux'
// Reducers
import ChangeTabReducer from './ChangeTabReducer';

// Combine Reducers
var reducers = combineReducers({
    menuBarState: ChangeTabReducer
});

export default reducers;
