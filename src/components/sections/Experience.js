import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

const styles = {
  sectionContainer:{
    padding: '0 25px'
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '35px',
    textAlign: 'center'
  },

  expRow: {
    display: 'flex'
  },

  expIntro: {
    width: '30%'
  },
  expIntroTitle: {
    fontSize: '1.8em',
    color: '#3F51B5',
    padding: '5px 0'
  },
  expIntroTime: {
    color: '#8a8a8a',
    fontSize: '1.2em'
  },

  expItem: {
    width: '70%',
    paddingLeft: '35px',
    borderLeft: '3px solid #3F51B5',
    color: '#666'
  },
  expItemTitle: {
    fontSize: '2em',
    fontWeight: 300,
    marginBottom: '10px',
    marginRight: 'auto'
  },
  expItemDesc: {
    lineHeight: 1.5,
    fontSize: '1.6em',
    paddingBottom: '25px'
  },

  mobileIntro: {
    display: 'none'
  },

  '@media screen and (max-width: 768px)': {
    expIntro: { display: 'none' },
    expItem: {
      width: '100%',
      padding: '0',
      border: 'none'
    },
    expItemTitle: { margin: '0' },
    mobileIntro: { display: 'block' }
  }
};

const Experience = (props) => {
  const { classes } = props;

  const descriptions = {
    cegmag: [
      { id: 'ceg1',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      { id: 'ceg2',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      { id: 'ceg3',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      { id: 'ceg4',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }
    ],

    chingu: [
      {
        id: 'chingu1',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      {
        id: 'chingu2',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      {
        id: 'chingu3',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      {
        id: 'chingu4',
        bullet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }
    ]
  };

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Work Experiences</h2>

      <div className={classes.expRow}>
        <div className={classes.expIntro}>
          <div className={classes.expIntroTitle}>JavaScript Web Developer</div>
          <div className={classes.expIntroTime}>March 2017 - March 2018</div>
        </div>

        <div className={classes.expItem}>
          <div className={classes.expItemTitle}>CEGMAG Solutions Inc.</div>
          
          <div className={classes.mobileIntro}>
            <div className={classes.expIntroTitle}>JavaScript Web Developer</div>
            <div className={classes.expIntroTime}>March 2017 - March 2018</div>
          </div>

          <ul className={classes.expItemDesc}>
            {descriptions.cegmag.map(item => {
              return <li key={item.id}>{item.bullet}</li>
            })}
          </ul>
        </div>
      </div>

      <div className={classes.expRow}>
        <div className={classes.expIntro}>
          <div className={classes.expIntroTitle}>Full-Stack Developer</div>
          <div className={classes.expIntroTime}>February 2018 - May 2018</div>
        </div>

        <div className={classes.expItem}>
          <div className={classes.expItemTitle}>Chingu Cohorts</div>

          <div className={classes.mobileIntro}>
            <div className={classes.expIntroTitle}>Full-Stack Developer</div>
            <div className={classes.expIntroTime}>February 2018 - May 2018</div>
          </div>

          <ul className={classes.expItemDesc}>
            {descriptions.chingu.map(item => {
              return <li key={item.id}>{item.bullet}</li>
            })}
          </ul>
        </div>
      </div>


    </div>
  );
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);