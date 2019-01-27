import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

import LargeIcon from "../LargeIcon";
import { JAVASCRIPT, REACT, NODEJS, AMAZON, CSHARP, CSS } from "../IconList";

const styles = {
  sectionContainer: {
    textAlign: "center"
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: "2.4em",
    marginBottom: "34px"
  },
  topSkillsTitle: {
    fontSize: "2em",
    color: "#8a8a8a",
    fontWeight: 300,
    marginBottom: "34px"
  },
  topSkills: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "50px"
  },
  skillTitle: {
    fontWeight: 500,
    fontSize: "2.2em",
    margin: "20px 0"
  },
  skillDesc: {
    color: "#666",
    padding: "0 25px",
    fontSize: "1.4em"
  },
  otherSkills: {
    maxWidth: "650px",
    margin: "0 auto"
  },
  otherSkill: {
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    display: "inline-block",
    fontSize: "1.6em",
    fontWeight: 500,
    padding: "6px 30px",
    margin: "0 15px 15px 0",
    border: "1px solid #f5f5f5"
  },

  "@media screen and (max-width: 768px)": {
    sectionTitle: { marginBottom: "15px" },
    topSkillsTitle: { marginBottom: "15px" },
    skillTitle: { margin: "10px 0" },
    topSkills: { flexDirection: "column", marginBottom: "0" },
    topSkill: { marginBottom: "15px" },
    skillDesc: { paddingBottom: "15px" }
  }
};

const Skills = props => {
  const { classes } = props;

  const skills = [
    "HTML5",
    "OOP",
    "TDD",
    ".NET",
    "MongoDB",
    "REST",
    "Git",
    "Vue",
    "Polymer",
    "Google Cloud Platform"
  ];

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Professional Skills</h2>

      <h3 className={classes.topSkillsTitle}>Top Skills</h3>
      <div className={classes.topSkills}>
        <div className={classes.topSkill}>
          <LargeIcon icon={JAVASCRIPT} color="#3849A2" />
          <h4 className={classes.skillTitle}>JavaScript</h4>
          <div className={classes.skillDesc}>
            It is my main priority to be proficient in the JavaScript language
            which enabled me to become familiar with the vast ecosystem of
            libraries and frameworks and to write best practice code.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={REACT} color="#3849A2" />
          <h4 className={classes.skillTitle}>React</h4>
          <div className={classes.skillDesc}>
            Placing heavy emphasis on JavaScript, a hugely supportive community
            and being backed by Facebook, React quickly became my favorite JS
            library which I use on all my current projects today.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={NODEJS} color="#3849A2" />
          <h4 className={classes.skillTitle}>NodeJS</h4>
          <div className={classes.skillDesc}>
            Naturually I chose continue using JavaScript not only for client
            code, but also for building out REST APIs and serverless back-end
            code through AWS with Node.js as my backend language of choice.
          </div>
        </div>
      </div>

      <div className={classes.topSkills}>
        <div className={classes.topSkill}>
          <LargeIcon icon={AMAZON} color="#3849A2" />
          <h4 className={classes.skillTitle}>Amazon Web Services</h4>
          <div className={classes.skillDesc}>
            Being very excited about the rapid growth in serverless
            technologies, I actively use AWS due to it being one step ahead of
            its competitors and providing an extensive amount of tools and
            technologies to simplify the web development process.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={CSHARP} color="#3849A2" />
          <h4 className={classes.skillTitle}>C#</h4>
          <div className={classes.skillDesc}>
            While Node.js would be my first choice in choosing a back-end
            language, learning and using C# has taught me various OOP
            methodologies and patterns which has made me become a better
            developer and has proven to be quiet an elegant language.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={CSS} color="#3849A2" />
          <h4 className={classes.skillTitle}>CSS</h4>
          <div className={classes.skillDesc}>
            One of my greatest strengths as a developer is having the ability to
            bring ideas and user requested features to life visually. Bringing
            the designs front white board to browser screen seemlessly is what I
            take greate pride in using CSS to do so.
          </div>
        </div>
      </div>

      <h3 className={classes.topSkillsTitle}>Other Skills</h3>
      <div className={classes.otherSkills}>
        {skills.map(item => (
          <div key={item} className={classes.otherSkill}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skills);
