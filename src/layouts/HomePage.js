import React, { Component } from 'react';

import { connect } from 'react-redux';
import { push } from "react-router-redux";

import Button from 'material-ui/Button';




const StartdButton = ( (props) => (
  <Button onClick = {props.onClick} raised color="primary">
    Go to the song book
  </Button>
));


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