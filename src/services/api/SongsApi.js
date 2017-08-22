// import $ from 'jquery';
import axios from 'axios'


// headers:{
//     'Content-Type': 'application/json'				
// }
            
var Server = {

    getAllSongs: () => dispatch => {
        axios({
        method: 'get',
        url: 'https://worshipizer.herokuapp.com/api/songs',
        // data: { prop: value }
        // headers: {
        //     'content-type': 'application/json'
        // }
        }).then(function(response) {
            console.log( response.data.songs );
            dispatch( { type: "LOAD_ALL_SONGS", payload: { songs: response.data.songs }});
        });
    },

    getSongById: (id) => dispatch => {
        axios({
        method: 'get',
        url: 'https://worshipizer.herokuapp.com/api/song/' + id,
        // data: { prop: value }
        // headers: {
        //     'content-type': 'application/json'
        // }
        }).then(function(response) {
            console.log( response.data );
            dispatch( { type: "OPEN_SONG", payload: { song: response.data }});
        });
    },

    addSong: (song) => dispatch => {
        axios({
        method: 'post',
        url: 'https://worshipizer.herokuapp.com/api/song',
        data: JSON.stringify(song),
        headers: {
            'content-type': 'application/json'
        }}).then(function(response) {
            console.log( response.data.songs);
            dispatch( { type: "LOAD_ALL_SONGS", payload: {songs: response.data.songs }});
        });
    },

    // deleteSongById: function (id) {
    //     $.ajax({
    //         type: "GELETE",
    //         url: "https://worshipizer.herokuapp.com/api/song/" + id,
    //         success: function(data) {
    //             alert(JSON.stringify(data));
    //         },
    //         error: function(data) {
    //             alert("ERROR!!!" + JSON.stringify(data));
    //         }
    //     });
    // },

    // searchSongsByTitle: function (query) {
    //     $.ajax({
    //         type: "GET",
    //         url: "https://worshipizer.herokuapp.com/api/song/search?query=" + query,
    //         success: function(data) {
    //             alert(JSON.stringify(data));
    //             return data.songs;
    //         },
    //         error: function(data) {
    //             alert("ERROR!!!" + JSON.stringify(data));
    //         }
    //     });
    // },

    // updateSong: function (id, newData) {
    //     $.ajax({
    //         type: "PUT",
    //         url: "https://worshipizer.herokuapp.com/api/song/" + id,
    //         data: JSON.stringify(newData),
    //         contentType: "application/json; charset=utf-8",
    //         success: function(data) {
    //             alert(JSON.stringify(data));
    //         },
    //         error: function(data) {
    //             alert("ERROR!!!" + JSON.stringify(data));
    //         }
    //     });
    // }
}

export default Server;