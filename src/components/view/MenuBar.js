import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux';
import { push } from "react-router-redux";



class MenuBar extends Component{
    render() {
        return (
            <Tabs
                className="menu-bar"
                onChange={this.props.onChangeTab}
                value={this.props.value} 
            >
                <Tab
                    label="Home"
                    value="home"
                />
                <Tab
                    label="Songs"
                    value="songs"
                />
                <Tab
                    value="playlists"
                    label="Playlists"
                />
                <Tab
                    value="live"
                    label="LIVE"
                />
            </Tabs>)
    }
};


const mapStateToProps = (state, ownProps = {}) => {
  return {
    value: state.menuBarState,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeTab: (value) => {
    dispatch( { type: "ACTIVE_TAB_CHANGE", payload: value });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);