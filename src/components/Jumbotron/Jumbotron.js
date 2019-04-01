import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import Icon from '../Icon/Icon'
import { LINKEDIN, GITHUB, MEDIUM, EMAIL, PHONE, LOCATION } from '../Icon/IconList'

import JumbotronStyles from './styles'

const Jumbotron = props => {
  const { classes } = props
  const portfolioImg = process.env.PUBLIC_URL + '/images/michael.jpg'

  return (
    <header>
      <div className={classes.topBar}>
        <div />

        <div>
          <IconButton href="https://www.linkedin.com/in/michael-gee/" target="_blank">
            <Icon icon={LINKEDIN} />
          </IconButton>

          <IconButton className={classes.topBarIcon} href="https://medium.com/@michael.gee" target="_blank">
            <Icon icon={MEDIUM} />
          </IconButton>

          <IconButton href="https://github.com/michaelgee22" target="_blank">
            <Icon icon={GITHUB} />
          </IconButton>
        </div>

        {/* RESUME --- OUT OF DATE
        <Button
          className={classes.topBarBtn}
          href="https://drive.google.com/file/d/1_c5XlaReGkwkzgRngFk6cukfmYB9twY3/view"
          target="_blank"
          style={{ backgroundColor: "lightgray", color: "gray" }}
        >
          <Icon icon={VIEWPAGE} />
          <span className={classes.btnText}>Resume</span>
        </Button> */}
      </div>

      <div className={classes.introSection}>
        <img className={classes.portfolioImg} src={portfolioImg} alt="Michael Gee Headshot" />
        <h1 className={classes.mainTitle}>Michael Gee</h1>
        <h2 className={classes.secondaryTitle}>Software Developer</h2>

        <p className={classes.introDesc}>
          I am a passionate, energetic, and self-motivated full-stack software developer eager to turn ideas into
          applications. My ambitions are to stay on the leading edge of the web development industry which include
          utilizing serverless technologies, building elegant user interfaces, and eventually incorporating artificial
          intelligence in the software I build. I always look to find new learning opportunities or projects to rapidly
          keep improving as a developer.
        </p>
      </div>

      <div className={classes.contactSection}>
        <div className={classes.contactContent}>
          <div className={classes.contactItem}>
            <Icon icon={EMAIL} />
            <span className={classes.contactText}>michael.gee@coreview.com</span>
          </div>
          <div className={classes.contactItem}>
            <Icon icon={PHONE} />
            <span className={classes.contactText}>(678) 446 1512</span>
          </div>
          <div className={classes.contactItem}>
            <Icon icon={LOCATION} />
            <span className={classes.contactText}>Atlanta, GA</span>
          </div>
        </div>
      </div>

      <div className={classes.navSection}>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('experience')}>
          Experience
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('skills')}>
          Skills
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('portfolio')}>
          Portfolio
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('education')}>
          Education
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('contact')}>
          Contact
        </Button>
      </div>
    </header>
  )
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
  triggerComponentScroll: PropTypes.func.isRequired
}

export default withStyles(JumbotronStyles)(Jumbotron)
