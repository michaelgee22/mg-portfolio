import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

const styles = {
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '35px',
    textAlign: 'center'
  }
};

const Portfolio = (props) => {
  const { classes } = props;

  return (
    <div>
      <h2 className={classes.sectionTitle}>Portfolio</h2>
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);