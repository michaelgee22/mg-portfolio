import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {};

class ProjectDialog extends Component {
  handleClose() {
    this.props.onClose();
  }

  render() {
    const { classes, onClose, currentProject, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose.bind(this)} {...other}>
        <div>
          <DialogTitle>{currentProject.title}</DialogTitle>
        </div>
      </Dialog>
    );
  }
}

ProjectDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  currentProject: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export default withStyles(styles)(ProjectDialog);