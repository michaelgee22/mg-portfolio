import React from 'react'

import ExperienceData from './static'
import { useStyles } from './styles'

const Experience = () => {
  const classes = useStyles()

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Work Experiences</h2>

      <div className={classes.expRow}>
        <div className={classes.expIntro}>
          <div className={classes.expIntroTitle}>Full-Stack Developer</div>
          <div className={classes.expIntroTime}>July 2018 - Present</div>
        </div>

        <div className={classes.expItem}>
          <div className={classes.expItemTitle}>CoreView</div>

          <div className={classes.mobileIntro}>
            <div className={classes.expIntroTitle}>Full-Stack Developer</div>
            <div className={classes.expIntroTime}>July 2018 - Present</div>
          </div>

          <ul className={classes.expItemDesc}>
            {ExperienceData.coreview.map(item => (
              <li key={item.id}>{item.bullet}</li>
            ))}
          </ul>
        </div>
      </div>

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
            {ExperienceData.cegmag.map(item => (
              <li key={item.id}>{item.bullet}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.expRow}>
        <div className={classes.expIntro}>
          <div className={classes.expIntroTitle}>Full-Stack Developer</div>
          <div className={classes.expIntroTime}>February 2018 - July 2018</div>
        </div>

        <div className={classes.expItem}>
          <div className={classes.expItemTitle}>Chingu Cohorts</div>

          <div className={classes.mobileIntro}>
            <div className={classes.expIntroTitle}>Full-Stack Developer</div>
            <div className={classes.expIntroTime}>February 2018 - May 2018</div>
          </div>

          <ul className={classes.expItemDesc}>
            {ExperienceData.chingu.map(item => (
              <li key={item.id}>{item.bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
