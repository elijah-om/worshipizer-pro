import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import reducers from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green900, grey600 } from 'material-ui/styles/colors';

import App from './App';

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey600,
    accent1Color: green900
  }
});

const history = createHistory();  
const middleware = routerMiddleware(history)

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, middleware)));


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        <App/>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

