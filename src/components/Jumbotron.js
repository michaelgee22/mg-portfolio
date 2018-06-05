import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Icon from './Icon';
import { 
  LINKEDIN, 
  GITHUB, 
  TWITTER, 
  VIEWPAGE,
  EMAIL,
  PHONE,
  LOCATION } from './IconList';
import michael from '../images/michael.jpg';

const styles = {
  topBar: {
    backgroundColor: '#32408F',
    padding: '10px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topBarIcon: { margin: '0 3px 0 2px' },
  topBarBtn: {
    color: 'white',
    marginRight: '5px'
  },
  btnText: { marginLeft: '5px' },

  introSection: {
    backgroundColor: '#3849A2',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  portfolioImg: {
    width: '175px',
    height: '175px',
    marginTop: '15px',
    border:'5px solid white',
    borderRadius: '50%'
  },
  mainTitle: {
    fontSize: '4.8em',
    padding: '15px 0 5px 0',
    textAlign: 'center'
  },
  secondaryTitle: {
    fontSize: '2.8em',
    padding: '5px 0',
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  introDesc: {
    maxWidth: '800px',
    fontSize: '1.6em',
    lineHeight: '1.5',
    textAlign: 'center',
    padding: '0 15px 25px 15px'
  },

  contactSection: {
    backgroundColor: '#32408F',
    color: 'white',
    fontSize: '1.6em',
    padding: '25px 0'
  },
  contactContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactItem: { display: 'flex', marginRight: '30px' },
  contactText: { marginLeft: '10px', marginTop: '3px' },

  navSection: {
    backgroundColor: '#2B387C',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  navBtn: { color: 'rgba(255, 255, 255, 0.8)' },

  '@media screen and (max-width: 768px)': {
    navSection: { display: 'none' }
  },

  '@media screen and (max-width: 600px)': {
    contactContent: { flexDirection: 'column' },
    contactItem: { margin: '0', padding: '5px 0' }
  }
};

const Jumbotron = props => {
  const { classes } = props;

  return (
    <header>
      <div className={classes.topBar}>
        <div>
          <IconButton href="https://www.linkedin.com/in/michael-gee/" target="_blank">
            <Icon icon={LINKEDIN} />
          </IconButton>

          <IconButton className={classes.topBarIcon} href="https://twitter.com/michaelgee7" target="_blank">
            <Icon icon={TWITTER} />
          </IconButton>

          <IconButton href="https://github.com/michaelgee22" target="_blank">
            <Icon icon={GITHUB} />
          </IconButton>
        </div>

        <Button className={classes.topBarBtn} href="https://drive.google.com/file/d/1_c5XlaReGkwkzgRngFk6cukfmYB9twY3/view" target="_blank">
          <Icon icon={VIEWPAGE} />
          <span className={classes.btnText}>Resume</span>
        </Button>
      </div>

      <div className={classes.introSection}>
        <img className={classes.portfolioImg} src={michael} alt="Michael Gee Headshot"/>
        <h1 className={classes.mainTitle}>Michael Gee</h1>
        <h2 className={classes.secondaryTitle}>Full Stack Developer</h2>

        <p className={classes.introDesc}>
          I am a passionate, energetic, and self motivated Full-Stack JavaScript developer eager to turn ideas into applications. My ambitions are to eventually become a core contributor in a development team within a company, contribute heavily to open source projects & my community and to stay on the leading edge of technology to create solutions nobody has ever solved before. I always look to find new learning opportunities or projects to rapidly keep improving as a developer. 
        </p>
      </div>

      <div className={classes.contactSection}>
        <div className={classes.contactContent}>
          <div className={classes.contactItem}>
            <Icon icon={EMAIL} />
            <span className={classes.contactText}>michaelgee221@gmail.com</span>
          </div>
          <div className={classes.contactItem}>
            <Icon icon={PHONE} />
            <span className={classes.contactText}>678-446-1512</span>
          </div>
          <div className={classes.contactItem}>
            <Icon icon={LOCATION} />
            <span className={classes.contactText}>Atlanta, GA</span>
          </div>
        </div>
      </div>

      <div className={classes.navSection}>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('experience')}>Experience
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('skills')}>Skills
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('portfolio')}>Portfolio
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('education')}>Education
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('contact')}>Contact
        </Button>
      </div>

    </header>
  );
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Jumbotron);