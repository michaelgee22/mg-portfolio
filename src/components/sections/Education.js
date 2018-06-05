import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

const styles = {
  sectionContainer:{
    padding: '0 15px'
  },
  introContainer: {
    maxWidth: '405px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '25px',
    textAlign: 'center'
  },
  eduTitle: {
    fontWeight: 500,
    color: '#3F51B5',
    fontSize: '2em',
    margin: '0',
  },
  eduTags: {
    fontSize: '1.6em'
  },
  eduTime: {
    color: '#8a8a8a',
    marginBottom: '15px',
    fontSize: '1.5em'
  },
  eduDesc: {
    fontSize: '1.6em',
    lineHeight: 1.5
  }
};

const Education = (props) => {
  const { classes } = props;

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Education</h2>

      <div className={classes.introContainer}>
        <h3 className={classes.eduTitle}>Online Resources / Courses / Documentation</h3>
        <div className={classes.eduTags}>Web Development, JavaScript Development</div>
        <div className={classes.eduTime}>2016 - Present</div>
      </div>

      <div className={classes.eduDesc}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </div>
    </div>
  );
}

Education.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Education);