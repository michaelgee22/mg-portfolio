import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

const styles = {
  sectionContainer: { padding: "0 15px" },
  introContainer: {
    maxWidth: "405px",
    margin: "0 auto"
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: "2.4em",
    marginBottom: "25px",
    textAlign: "center"
  },
  eduTitle: {
    fontWeight: 500,
    color: "#3F51B5",
    fontSize: "2em",
    margin: "0"
  },
  eduTags: {
    fontSize: "1.6em"
  },
  eduTime: {
    color: "#8a8a8a",
    marginBottom: "15px",
    fontSize: "1.5em"
  },
  eduDesc: {
    fontSize: "1.6em",
    lineHeight: 1.5,
    padding: "0 25px",
    color: "#666"
  },

  "@media screen and (max-width: 600px)": {
    sectionContainer: { textAlign: "center" }
  }
};

const Education = props => {
  const { classes } = props;

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Education</h2>

      <div className={classes.introContainer}>
        <h3 className={classes.eduTitle}>
          Online Resources / Courses / Documentation
        </h3>
        <div className={classes.eduTags}>
          Web Development, JavaScript Development
        </div>
        <div className={classes.eduTime}>2016 - Present</div>
      </div>

      <div className={classes.eduDesc}>
        <p>
          I have spent countless hours exploring every corner of the internet to
          find the best resources to master various aspects of web development.
          I have embraced the fact that technology is an ever-changing industry,
          which proved that learning how to learn is just as important than the
          content you are currently learning. While video courses and
          documentation were great to start off with, I learned that reading
          community questions on Stack Overflow, sifting through Github
          repositories and actually building my own projects was the fastest way
          to improvement. Learning this own my own greatly improved my
          problem-solving skills and enabled me to quickly find solutions to
          problems much faster whenever I get stuck.
        </p>

        <p>
          As mentioned above, I am a self-motivated web developer which enabled
          me to teach myself the various subjects that I wanted to learn to
          begin application development sooner rather than spending 4 years to
          get a degree. I realize that not going to college would come with its
          downsides, but I truly believe it has been very beneficial in becoming
          the developer I am today. I have the passion to learn outside of work
          hours and the knowledge of how to teach myself something that I am not
          familiar with in a timely manner. I am certain that I am not the most
          experienced or knowledgeable Junior developer, but I believe I have
          put myself in a position to grow as a developer faster than others.
        </p>
      </div>
    </div>
  );
};

Education.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Education);
