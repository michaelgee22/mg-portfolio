import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Jumbotron from './Jumbotron';

import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Education from './sections/Education';
import Contact from './sections/Contact';

const styles = {
  '@global': {
    body: {
      padding: '0',
      margin: '0',
      fontSize: '62.5%',
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
      backgroundColor: '#F5F5F5'
    },
    h1: { margin: '0' },
    h2: { margin: '0' }
  },
  
  portfolioSection: {
    backgroundColor: 'white',
    maxWidth: '1000px',
    margin: '45px auto',
    padding: '45px 25px',
    borderRadius: '3px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)'
  },

  '@media screen and (max-width: 768px)': {
    portfolioSection: {
      width: 'calc(100% - 50px)',
      margin: '25px auto'
    }
  }
};

const App = props => {
  function triggerComponentScroll(component) {
    document.getElementById(component).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  const { classes } = props;

  return (
    <div className={classes.container}>
      <Jumbotron triggerComponentScroll={triggerComponentScroll} />
      <main>
        <section id="experience" className={classes.portfolioSection}>
          <Experience />
        </section>
        <section id="skills" className={classes.portfolioSection}>
          <Skills />
        </section>
        <section id="portfolio" className={classes.portfolioSection}>
          <Portfolio />
        </section>
        <section id="education" className={classes.portfolioSection}>
          <Education />
        </section>
        <section id="contact" className={classes.portfolioSection}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
