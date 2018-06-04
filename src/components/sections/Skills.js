import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import LargeIcon from '../LargeIcon';
import { JAVASCRIPT, REACT, NODEJS } from '../IconList';

const styles = {
  sectionContainer: {
    textAlign: 'center'
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '35px'
  },
  topSkillsTitle: {
    fontSize: '1.8em',
    color: '#8a8a8a',
    fontWeight: 300,
    marginBottom: '35px'
  },
  topSkills: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px'
  },
  skillTitle: {
    fontWeight: 500,
    fontSize: '2.2em',
    margin: '20px 0'
  },
  skillDesc: {
    color: '#666',
    padding: '0 25px',
    fontSize: '1.4em'
  },
  otherSkills: {
    maxWidth: '650px',
    margin: '0 auto'
  },
  otherSkill: {
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    display: 'inline-block',
    fontSize: '1.6em',
    fontWeight: 500,
    padding: '6px 30px',
    margin: '0 15px 15px 0',
    border: '1px solid #f5f5f5'
  }
};

const Skills = (props) => {
  const { classes } = props;

  const skills = [ 'HTML5', 'CSS3', 'MongoDB', 'Vue', 'REST', 'Git', 'GraphQL', 'Apollo', 'Polymer', 'Firebase' ];

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Professional Skills</h2>

      <div>
        <h3 className={classes.topSkillsTitle}>Top Skills</h3>
        <div className={classes.topSkills}>
          <div className={classes.topSkill}>
            <LargeIcon icon={JAVASCRIPT} color="#3849A2" />
            <h4 className={classes.skillTitle}>JavaScript</h4>
            <div className={classes.skillDesc}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            </div>
          </div>

          <div className={classes.topSkill}>
            <LargeIcon icon={REACT} color="#3849A2" />
            <h4 className={classes.skillTitle}>React</h4>
            <div className={classes.skillDesc}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            </div>
          </div>

          <div className={classes.topSkill}>
            <LargeIcon icon={NODEJS} color="#3849A2" />
            <h4 className={classes.skillTitle}>NodeJS</h4>
            <div className={classes.skillDesc}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            </div>
          </div> 
        </div>

        <h3 className={classes.topSkillsTitle}>Other Skills</h3>
        <div className={classes.otherSkills}>
          {skills.map(item => <div key={item} className={classes.otherSkill}>{item}</div>)}
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skills);