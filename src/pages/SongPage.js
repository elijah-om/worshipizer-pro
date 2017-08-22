import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import Server from '../services/api/SongsApi';
import './SongBookPage.css';


class SongPage extends Component {

    componentDidMount(){
        console.log("SongPage:", 'componentDidMount');
        this.props.loadSong(this.props.match.params.songId);
        console.log("SongPage props:", this.props);
    }

    render() {
        return (
            <div className='song-item'>
                SONG_PAGE
                {}
                {/* <div className='song-title mini'>{this.props.song.songMeta.title}</div>
                <div className='song-subtitle mini'>{this.props.song.songMeta._id}</div> */}
            </div>
        )
    }
}

const Song = ({ match }) => (
    <div>
      <h3>{match.params.songId}</h3>
    </div>
  )

const mapStateToProps = (state, ownProps = {}) => {
    // console.log(state);

    return {
        song: state.songPageState.song,
        openType: state.songPageState.openType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadSong: (id) => {
        dispatch( Server.getSongById(id) );
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SongPage);