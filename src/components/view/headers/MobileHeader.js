import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

const MobileHeader = (props) => {
    return (
        <div className="header mobile-header">
            <div
              className={(props.leftButton === 'edit') ? 'header-button left' : 'hide'}
            >
              Edit
            </div>
            <div className="header-title">{props.title}</div>
            <div
              className={(props.rightButton === 'add') ? 'header-button right' : 'hide'}
            >
              +
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    title: state.headerState.title,
    leftButton: state.headerState.leftButton,
    rightButton: state.headerState.rightButton
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeTab: (value) => {
    dispatch( { type: "ACTIVE_TAB_CHANGE", payload: value });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);