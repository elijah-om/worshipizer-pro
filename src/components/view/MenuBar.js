import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { connect } from 'react-redux';
import { push } from "react-router-redux";


const styleSheet = createStyleSheet('CenteredTabs', theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
}));

class MenuBar extends Component{
    render() {
        return (
            <Tabs
                className="menu-bar"
                //onChange={this.props.onChangeTab} 
                //value={this.props.value}   
            >
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
                <Tab
                    label="Settings"
                    value="settings"
                />
            </Tabs>
        )
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



export default withStyles(styleSheet)(MenuBar);

// export default connect(mapStateToProps, mapDispatchToProps);