import React from 'react'

import Jumbotron from './components/Jumbotron'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Education from './sections/Education'
import Contact from './sections/Contact'

import { useStyles } from './styles'

const App = () => {
  const classes = useStyles()

  return (
    <>
      <Jumbotron triggerComponentScroll={_triggerComponentScroll} />

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
    </>
  )

  function _triggerComponentScroll(component) {
    document.getElementById(component).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default App
