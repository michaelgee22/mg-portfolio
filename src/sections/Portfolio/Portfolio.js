import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

import Dialog from '../../components/Dialog'
import Icon from '../../components/Icon/Icon'
import { GITHUB, GO_ARROW, OPEN_BOOK } from '../../components/Icon/IconList'

import PortfolioData from './static'
import PortfolioStyles from './styles'

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      desc: ''
    }

    this.handleDialogOpen = this.handleDialogOpen.bind(this)
    this.handleDialogClose = this.handleDialogClose.bind(this)
  }

  handleDialogOpen(e) {
    let index = e.currentTarget.id.replace(/^\D+/g, '')
    index = parseInt(index)

    this.setState({
      open: true,
      desc: PortfolioData[index].desc
    })
  }

  handleDialogClose() {
    this.setState({ open: false, desc: '' })
  }

  renderGithubIconButton(href, classes) {
    if (!href) {
      return false
    }

    return (
      <Tooltip title="Source Code">
        <IconButton href={href} target="_blank" className={classes.projectBtn}>
          <Icon icon={GITHUB} />
        </IconButton>
      </Tooltip>
    )
  }

  renderVisitIconButton(href, classes) {
    if (!href) {
      return false
    }

    return (
      <Tooltip title="View Project">
        <IconButton href={href} target="_blank" className={classes.projectBtn}>
          <Icon icon={GO_ARROW} />
        </IconButton>
      </Tooltip>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <h2 className={classes.sectionTitle}>Portfolio</h2>

        <div className={classes.projectsContainer}>
          {PortfolioData.map(item => (
            <div key={item.id} className={classes[item.className]}>
              <div className={classes.projectImgWrapper}>
                <img src={item.image} className={classes.projectImg} alt={item.imageAlt} />
              </div>

              <div className={classes.projectInfo}>
                <h3 className={classes.projectTitle}>{item.title}</h3>
                <div className={classes.projectTags}>
                  {item.tags.map(tag => (
                    <div className={classes.tag} key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>

                <div>
                  {this.renderGithubIconButton(item.codeHref, classes)}

                  <Tooltip title="Description">
                    <IconButton id={item.id} onClick={this.handleDialogOpen} className={classes.projectBtn}>
                      <Icon icon={OPEN_BOOK} />
                    </IconButton>
                  </Tooltip>
                  <Dialog open={this.state.open} onClose={this.handleDialogClose} content={this.state.desc} />

                  {this.renderVisitIconButton(item.href, classes)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(PortfolioStyles)(Portfolio)
