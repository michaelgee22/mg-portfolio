import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Icon from '../Icon';
import { GITHUB, GO_ARROW, OPEN_BOOK } from '../IconList';

import cegmag from '../../images/cegmag.png';

const projects = [
  {
    id: 'cegmag',
    className:'project',
    title: 'CEGMAG Solutions Inc',
    tags: [ 'JavaScript', 'Polymer', 'HTML5', 'CSS3', 'Git' ],
    codeHref: false,
    href: 'https://website-eeb2b.firebaseapp.com/',
    image: cegmag,
    imageAlt: 'CEGMAG Solutions Inc. Project'
  },
  {
    id: 'portfolio',
    className: 'projectReverse',
    title: 'Portfolio (Current Application)',
    tags: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Git'],
    codeHref: '',
    href: false,
    image: cegmag,
    imageAlt: 'Portfolio Project'
  },
  {
    id: 'chat-box',
    className: 'project',
    title: 'Chat-box',
    tags: ['JavaScript', 'Polymer', 'Firebase', 'HTML5', 'CSS3', 'Git'],
    codeHref: '',
    href: 'https://mgchatbox.com/',
    image: cegmag,
    imageAlt: 'Chat-Box Project'
  },
  {
    id: 'lp-tribute',
    className: 'projectReverse',
    title: 'Linkin Park Tribute',
    tags: ['JavaScript', 'Vue', 'Firebase', 'HTML5', 'CSS3', 'Git'],
    codeHref: '',
    href: 'https://website-eeb2b.firebaseapp.com/',
    image: cegmag,
    imageAlt: 'Linkin Park Project'
  }
];

const styles = {
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '35px',
    textAlign: 'center'
  },
  projectsContainer: {
    
  },
  project: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '50px'
  },
  projectReverse: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '50px',
    flexDirection: 'row-reverse'
  },
  projectImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%'
  },
  projectImg: {
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    border: '10px solid #3F51B5'
  },
  projectInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  projectTitle: {
    fontSize: '2em',
    fontWeight: 500,
    margin: '15px 0'
  },
  projectTags: {
    margin: '15px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  tag: {
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    fontSize: '1.3em',
    fontWeight: 500,
    padding: '6px 15px',
    margin: '0 15px 15px 0',
    border: '1px solid #f5f5f5'
  },
  projectBtn: {
    backgroundColor: '#3F51B5',
    margin: '0 5px',

    "&:hover": {
      backgroundColor: 'black'
    }
  }
};

const Portfolio = (props) => {
  const { classes } = props;

  return (
    <div>
      <h2 className={classes.sectionTitle}>Portfolio</h2>

      <div className={classes.projectsContainer}>
        {projects.map(item => {
          return <div key={item.id} className={classes[item.className]}>

            <div className={classes.projectImgWrapper}>
              <img src={item.image} className={classes.projectImg} alt={item.imageAlt} />
            </div>

            <div className={classes.projectInfo}>
              <h3 className={classes.projectTitle}>{item.title}</h3>
              <div className={classes.projectTags}>
                {item.tags.map(tag => {
                  return <div className={classes.tag} key={tag}>{tag}</div>
                })}
              </div>

              <div>
                <IconButton href={item.codeHref} target="_blank" className={classes.projectBtn}>
                  <Icon icon={GITHUB} />
                </IconButton>

                <IconButton className={classes.projectBtn}>
                  <Icon icon={OPEN_BOOK} />
                </IconButton>

                <IconButton href={item.href} target="_blank" className={classes.projectBtn}>
                  <Icon icon={GO_ARROW} />
                </IconButton>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);