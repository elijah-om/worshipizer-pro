import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import MenuBar from './components/view/MenuBar';
import HomePage from './pages/HomePage';
import SongBookPage from './pages/SongBookPage';
import SongPage from './pages/SongPage';
import MobileHeader from './components/view/headers/MobileHeader';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={HomePage}/>
                <Route path='/:page' component={MobileHeader}/>  
                <Route exact path='/songs' component={SongBookPage}/>
                <Route path='/songs/:songId' component={SongPage}/>
                <Route path='/playlists' component={SongBookPage}/>
                <Route path='/live' component={SongBookPage}/>
                <Route path='/settings' component={SongBookPage}/>
                <Route  path='/:page' component={MenuBar}/>  
            </div>
        )
    }
}

export default App;
