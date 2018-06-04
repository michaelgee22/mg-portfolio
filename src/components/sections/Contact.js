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

const Contact = (props) => {
  const { classes } = props;

  return (
    <div>
      <h2 className={classes.sectionTitle}>Get In Touch</h2>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);