import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


import reducers from './reducers';

const history = createHistory();  

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(middleware, thunk))
)

// store.dispatch(push('/foo'))
const Home = () => (<div>Home page</div>);
const About = () => (<div>About page</div>);

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

