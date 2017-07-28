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
        <h1>Hello worshipper</h1>
        <p>Lets started</p>
        <StartdButton onClick={props.navigateToSongBook}/>
    </div>
)

let mapDispatchToProps = (dispatch) => ({
  navigateToSongBook: () => {
    dispatch(push('/songbook'));
  }
})

export default connect(null, mapDispatchToProps)(HomePage);