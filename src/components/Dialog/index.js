import React from 'react'
import PropTypes from 'prop-types'

import MUIDialog from '@material-ui/core/Dialog'

import { useStyles } from './styles'

const Dialog = ({ content, onClose }) => {
  const classes = useStyles()

  return (
    <MUIDialog onClose={onClose}>
      <div className={classes.contentWrapper}>{content}</div>
    </MUIDialog>
  )
}

Dialog.propTypes = {
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Dialog
