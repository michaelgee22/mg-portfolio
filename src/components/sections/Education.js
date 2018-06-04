import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

const styles = {

};

const Education = (props) => {
  const { classes } = props;

  return (
    <div>Education</div>
  );
}

Education.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Education);