// Reducers
import changeTabReducer from './ChangeTabReducer';
import headerReducer from './HeaderReducers';
import songBookReducer from './SongBookReducers';
import songPageReducer from './SongPageReducers'
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Combine Reducers
var reducers = combineReducers({
    menuBarState: changeTabReducer,
    headerState: headerReducer,
    songBookState: songBookReducer,
    songPageState: songPageReducer,
    router: routerReducer
});

export default reducers;
