import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import MenuBar from './components/view/MenuBar';
import HomePage from './layouts/HomePage';
import SongBookPage from './layouts/SongBookPage';


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/'>                        
                        <Route path='/songbook' component={SongBookPage}/>
                         {/* <Route path='/' component={MenuBar}/>  */}
                    </Route>    
                </Switch>
            </div>
        )
    }
}

export default App;
