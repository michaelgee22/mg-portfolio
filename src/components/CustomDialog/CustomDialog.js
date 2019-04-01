import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'

import DialogStyles from './styles'

const CustomDialog = props => {
  const { classes, onClose, content, ...other } = props

  return (
    <Dialog onClose={props.onClose} {...other}>
      <div className={classes.contentWrapper}>{props.content}</div>
    </Dialog>
  )
}

CustomDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
}

export default withStyles(DialogStyles)(CustomDialog)
