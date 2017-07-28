import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import MenuBar from './components/view/MenuBarPro';
import HomePage from './layouts/HomePage';
import SongBookPage from './layouts/SongBookPage';


class App extends Component {
    render() {
        return (
            <div>
                 {/* <Switch>  */}
                    <Route exact path='/' component={HomePage}/>
                        <Route path='/songbook' component={SongBookPage}/>
                        <Route path='/playlists' component={SongBookPage}/>
                        <Route path='/live' component={SongBookPage}/>
                        <Route path='/settings' component={SongBookPage}/>
                         <Route  path='/:page' component={MenuBar}/>   
                 {/* </Switch>  */}
            </div>
        )
    }
}

export default App;
