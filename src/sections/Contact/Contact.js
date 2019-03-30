import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Icon from "../../components/Icon/Icon";
import { LINKEDIN, MEDIUM, GITHUB } from "../../components/Icon/IconList";

import ContactStyles from "./styles";

const Contact = props => {
  const { classes } = props;

  return (
    <div>
      <h2 className={classes.sectionTitle}>Get In Touch</h2>

      <div className={classes.contactWrapper}>
        <p className={classes.contactDesc}>
          I am currently working as a full-stack developer with my current
          employer Coreview. Although a majority of my time does go into
          building exciting new work related features and applications during
          work hours, I still try to take time to work on side projects,
          continuously learn new things, and write blog posts whenever I have
          some spare time. I am always interested in hearing new ideas that
          anyone might have to build exciting new projects and contributing to
          open source projects so if interested in working with me or just
          having a discussion please don't hesitate to reach out.
        </p>
      </div>

      <h3 className={classes.contactText}>
        <span className={classes.blueText}>Email</span>:
        michael.gee@coreview.com
      </h3>
      <h3 className={classes.contactText}>
        <span className={classes.blueText}>Phone</span>: (678) 446 1512
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
          href="https://medium.com/@michael.gee"
          target="_blank"
        >
          <Icon icon={MEDIUM} />
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

export default withStyles(ContactStyles)(Contact);
