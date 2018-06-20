import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

const styles = {
  sectionContainer: {
    padding: "0 25px"
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: "2.4em",
    marginBottom: "35px",
    textAlign: "center"
  },

  expRow: {
    display: "flex"
  },

  expIntro: {
    width: "25%"
  },
  expIntroTitle: {
    fontSize: "1.8em",
    color: "#3F51B5",
    padding: "5px 0"
  },
  expIntroTime: {
    color: "#8a8a8a",
    fontSize: "1.2em"
  },

  expItem: {
    width: "75%",
    paddingLeft: "35px",
    borderLeft: "3px solid #3F51B5",
    color: "#666"
  },
  expItemTitle: {
    fontSize: "2em",
    fontWeight: 300,
    marginBottom: "10px",
    marginRight: "auto"
  },
  expItemDesc: {
    lineHeight: 1.5,
    fontSize: "1.6em",
    paddingBottom: "25px"
  },

  mobileIntro: {
    display: "none"
  },

  "@media screen and (max-width: 768px)": {
    expIntro: { display: "none" },
    expItem: {
      width: "100%",
      padding: "0",
      border: "none"
    },
    expItemTitle: { margin: "0" },
    mobileIntro: { display: "block" }
  }
};

const Experience = props => {
  const { classes } = props;

  const descriptions = {
    cegmag: [
      {
        id: "ceg1",
        bullet:
          "Developed web applications using full-stack JavaScript in cohesion with other leading-edge web technologies to provide progressive, fast, and user-focused solutions."
      },
      {
        id: "ceg2",
        bullet:
          "Responsibilities included all aspects of application development including planning, development, design, testing, performance improvement, maintenance, security, etc."
      },
      {
        id: "ceg3",
        bullet:
          "Researched and learned various front-end JS frameworks and libraries such as React, Vue, Polymer, Angular, and jQuery to determine the best project solutions."
      },
      {
        id: "ceg4",
        bullet:
          "Worked directly with various company representatives to integrate their exact user interface feature requests."
      }
    ],

    chingu: [
      {
        id: "chingu1",
        bullet:
          "An active and dedicated community of like-minded developers who come together to build or clone projects to gain development experience."
      },
      {
        id: "chingu2",
        bullet:
          "Worked in a team setting of 4-5 individuals using Git/Github & Slack for collaboration to plan and implement project features with assigned deadlines."
      },
      {
        id: "chingu3",
        bullet:
          "Individually organized and implemented the front-end & back-end file structure of projects and provided documentation for the entire team to set up locally to contribute."
      },
      {
        id: "chingu4",
        bullet:
          "Engaged in pair-programming to implement and share ideas on project features which enabled team building experience working with another developer directly."
      }
    ]
  };

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Work Experiences</h2>

      <div className={classes.expRow}>
        <div className={classes.expIntro}>
          <div className={classes.expIntroTitle}>JavaScript Developer</div>
          <div className={classes.expIntroTime}>March 2017 - March 2018</div>
        </div>

        <div className={classes.expItem}>
          <div className={classes.expItemTitle}>CEGMAG Solutions Inc.</div>

          <div className={classes.mobileIntro}>
            <div className={classes.expIntroTitle}>JavaScript Developer</div>
            <div className={classes.expIntroTime}>March 2017 - March 2018</div>
          </div>

          <ul className={classes.expItemDesc}>
            {descriptions.cegmag.map(item => (
              <li key={item.id}>{item.bullet}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.expRow}>
        <div className={classes.expIntro}>
          <div className={classes.expIntroTitle}>Full-Stack Developer</div>
          <div className={classes.expIntroTime}>February 2018 - Present</div>
        </div>

        <div className={classes.expItem}>
          <div className={classes.expItemTitle}>Chingu Cohorts</div>

          <div className={classes.mobileIntro}>
            <div className={classes.expIntroTitle}>Full-Stack Developer</div>
            <div className={classes.expIntroTime}>February 2018 - May 2018</div>
          </div>

          <ul className={classes.expItemDesc}>
            {descriptions.chingu.map(item => (
              <li key={item.id}>{item.bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);
