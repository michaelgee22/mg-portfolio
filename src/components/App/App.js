import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Jumbotron from "../Jumbotron";

import ExperienceSection from "../../sections/Experience";
import SkillsSection from "../../sections/Skills";
import PortfolioSection from "../../sections/Portfolio";
import EducationSection from "../../sections/Education";
import ContactSection from "../../sections/Contact";

import AppStyles from "./styles";

const App = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Jumbotron triggerComponentScroll={triggerComponentScroll} />
      <main>
        <section id="experience" className={classes.portfolioSection}>
          <ExperienceSection />
        </section>
        <section id="skills" className={classes.portfolioSection}>
          <SkillsSection />
        </section>
        <section id="portfolio" className={classes.portfolioSection}>
          <PortfolioSection />
        </section>
        <section id="education" className={classes.portfolioSection}>
          <EducationSection />
        </section>
        <section id="contact" className={classes.portfolioSection}>
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

function triggerComponentScroll(component) {
  document.getElementById(component).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(AppStyles)(App);
