import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

const styles = {
  contentWrapper: {
    minWidth: '500px',
    fontSize: '1.6em',
    textAlign: 'center',
    padding: '25px'
  }
};

class ProjectDialog extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, desc, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} {...other}>
        <div className={classes.contentWrapper}>
          {this.props.desc}
        </div>
      </Dialog>
    );
  }
}

ProjectDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired
};

export default withStyles(styles)(ProjectDialog);