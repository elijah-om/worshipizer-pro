import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import reducers from './reducers';

import { MuiThemeProvider } from 'material-ui/styles';
import {green900, grey600 } from 'material-ui/colors';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';

import App from './App';


const theme = createMuiTheme({
  palette: createPalette({
    primary: grey600,
    accent: green900,
  }),
});

var sheetsManager = new WeakMap();


const history = createHistory();  
const middleware = routerMiddleware(history)

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App/>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

