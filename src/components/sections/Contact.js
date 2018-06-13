import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Icon from "../Icon";
import { LINKEDIN, TWITTER, GITHUB } from "../IconList";

import michael from "../../images/michael.jpg";

const styles = {
  sectionTitle: {
    fontWeight: 500,
    fontSize: "2.4em",
    marginBottom: "35px",
    textAlign: "center"
  },
  contactWrapper: {
    display: "flex"
  },
  contactImg: {
    width: "175px",
    height: "175px",
    borderRadius: "50%"
  },
  contactDesc: {
    fontSize: "1.6em",
    lineHeight: 1.5,
    width: "calc(100% - 175px)",
    paddingLeft: "35px",
    margin: "5px 0",
    color: "#666"
  },
  contactText: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "1.8em"
  },
  btnSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  blueText: { color: "#3F51B5" },
  contactBtn: {
    margin: "0 10px",
    backgroundColor: "#3F51B5",

    "&:hover": {
      backgroundColor: "black"
    }
  },

  "@media screen and (max-width: 768px)": {
    sectionTitle: { marginBottom: "15px" },
    contactWrapper: { flexDirection: "column" },
    contactImg: { margin: "0 auto" },
    contactDesc: {
      width: "calc(100% - 50px)",
      padding: "0 25px",
      margin: "20px 0 5px 0",
      textAlign: "center"
    }
  }
};

const Contact = props => {
  const { classes } = props;

  return (
    <div>
      <h2 className={classes.sectionTitle}>Get In Touch</h2>

      <div className={classes.contactWrapper}>
        <img
          className={classes.contactImg}
          src={michael}
          alt="Michael Gee Headshot"
        />
        <p className={classes.contactDesc}>
          I am currently actively searching for a Junior Developer position
          (preferably Contract-To-Hire or Direct Hire) or open source
          contribution opportunities to continue growing as a developer. I look
          to use the MERN (MongoDB, Express, React, Node) web development stack
          in all my current and future projects moving forward although I do
          have experience with much more of the web development ecosystem and am
          always open to learn and try new things. If you are interested in
          hiring me or just talking about code in general feel free to get in
          touch with me through the methods below!
        </p>
      </div>

      <h3 className={classes.contactText}>
        <span className={classes.blueText}>Email</span> -
        michaelgee221@gmail.com
      </h3>
      <h3 className={classes.contactText}>
        <span className={classes.blueText}>Phone</span> - 678-446-1512
      </h3>

      <div className={classes.btnSection}>
        <Button
          variant="fab"
          className={classes.contactBtn}
          href="https://www.linkedin.com/in/michael-gee/"
          target="_blank"
        >
          <Icon icon={LINKEDIN} />
        </Button>
        <Button
          variant="fab"
          className={classes.contactBtn}
          href="https://twitter.com/michaelgee7"
          target="_blank"
        >
          <Icon icon={TWITTER} />
        </Button>
        <Button
          variant="fab"
          className={classes.contactBtn}
          href="https://github.com/michaelgee22"
          target="_blank"
        >
          <Icon icon={GITHUB} />
        </Button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
