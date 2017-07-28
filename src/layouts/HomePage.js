import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from "react-router-redux";

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  // margin: 12,
};

const StartdButton = (props) => (
  <RaisedButton onTouchTap={props.onClick}label="Go to the song book" secondary={true} style={style} />
);


const HomePage = (props) => (
    <div className="home-page">
        <h2>Welcome to the WORSHIPIZER</h2>
        <h4>Lets started</h4>
        <StartdButton onClick={props.navigateToSongBook}/>
    </div>
)

let mapDispatchToProps = (dispatch) => ({
  navigateToSongBook: () => {
    dispatch({type: "ACTIVE_TAB_CHANGE", payload: "songs"});
    dispatch(push('/songbook'));
  }
})

export default connect(null, mapDispatchToProps)(HomePage);