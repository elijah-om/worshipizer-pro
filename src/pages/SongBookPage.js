import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import Server from '../services/api/SongsApi';
import './SongBookPage.css';
import { Route } from 'react-router-dom';


class SongBookPage extends Component {
    constructor({ match }){
        super();
        console.log(match);
        this.match = match;
    }

    componentDidMount(){
        this.props.loadSongs();
        console.log("SongBookPage props:", this.props);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.status}
                    {this.props.songs.map((song) => (
                        <SongItem key={song._id} songMeta={song} onClick={this.props.onOpenSong}/>
                    ))}
                </div>
                {/* <div className='song-title mini'>{this.props.songs[0].songMeta.title}</div> */}
            </div>
        )
    }
}



const SongItem = (props) => (
    <div className='song-item' onClick={() => props.onClick(props.songMeta._id)}>
        <div className='song-title mini'>{props.songMeta.title}</div>
        <div className='song-subtitle mini'>{props.songMeta._id}</div>
    </div>
)

const mapStateToProps = (state, ownProps = {}) => {
  return {
    songs: state.songBookState.songs,
    status: state.songBookState.title
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadSongs: () => {
        // console.log(ownProps.match.url);
        dispatch( Server.getAllSongs() );
    },
    onOpenSong: (id) => {
        dispatch(push(`${ownProps.match.url}/${id}`))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SongBookPage);