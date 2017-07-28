import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

const styleSheet = createStyleSheet('CenteredTabs', theme => ({
  root: {
    flexGrow: 1,
    // marginTop: theme.spacing.unit * 3,
    margin: 0
  },
}));

class CenteredTabs extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className="menu-bar">
       <Paper className={classes.root}> 
        <Tabs
          index={this.state.index}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Songs" />
          <Tab label="PL" />
          <Tab label="LIVE" />
          <Tab label="Home" />
        </Tabs>
       </Paper> 
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CenteredTabs);