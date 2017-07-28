// Reducers
import ChangeTabReducer from './ChangeTabReducer';
import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';

// Combine Reducers
var reducers = combineReducers({
    menuBarState: ChangeTabReducer,
    router: routerReducer
});

export default reducers;
