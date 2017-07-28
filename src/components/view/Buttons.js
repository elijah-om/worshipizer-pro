import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styleSheet = createStyleSheet('RaisedButtons', theme => ({
  button: {
    // margin: theme.spacing.unit
  }
}));

function RaisedButtons(props) {
  const classes = props.classes;
  return (
    

      <Button raised color="primary">
        Go to the song book
      </Button>

  );
}

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default RaisedButtons;   