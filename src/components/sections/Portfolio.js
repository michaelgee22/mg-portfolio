import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

const styles = {

};

const Portfolio = (props) => {
  const { classes } = props;

  return (
    <div>Portfolio</div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);