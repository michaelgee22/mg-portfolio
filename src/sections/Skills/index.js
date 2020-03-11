import React from 'react'

import LargeIcon from '../../components/Icon/LargeIcon'
import { JAVASCRIPT, REACT, NODEJS, AMAZON, CSHARP, CSS } from '../../components/Icon/IconList'

import { useStyles } from './styles'

const Skills = () => {
  const classes = useStyles()

  const skills = ['HTML5', 'OOP', 'TDD', '.NET', 'MongoDB', 'REST', 'Git', 'Vue', 'Polymer', 'Google Cloud Platform']

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionTitle}>Professional Skills</h2>

      <h3 className={classes.topSkillsTitle}>Top Skills</h3>
      <div className={classes.topSkills}>
        <div className={classes.topSkill}>
          <LargeIcon icon={JAVASCRIPT} color="#3849A2" />
          <h4 className={classes.skillTitle}>JavaScript</h4>
          <div className={classes.skillDesc}>
            It is my main priority to be proficient in the JavaScript language which enables me to build great
            full-stack web applications using best practice code with an assortment of different libraries and
            frameworks.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={REACT} color="#3849A2" />
          <h4 className={classes.skillTitle}>React</h4>
          <div className={classes.skillDesc}>
            Placing heavy emphasis on JavaScript, with a vast ecosystem of supported external UI solution libraries, and
            a large supportive community, React quickly became my favorite JS library which I use on all current
            projects.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={NODEJS} color="#3849A2" />
          <h4 className={classes.skillTitle}>NodeJS</h4>
          <div className={classes.skillDesc}>
            Naturually I chose to continue using JavaScript not only for the client side, but also is my first choice
            for building REST APIs and serverless back-end projects utilizing its rich ecosystem of npm packages.
          </div>
        </div>
      </div>

      <div className={classes.topSkills}>
        <div className={classes.topSkill}>
          <LargeIcon icon={CSS} color="#3849A2" />
          <h4 className={classes.skillTitle}>CSS</h4>
          <div className={classes.skillDesc}>
            One of my greatest strengths as a developer is having the ability to bring ideas and user requested features
            to life visually. Bringing the designs front white board to browser screen seemlessly is what I take greate
            pride in using CSS to do so.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={CSHARP} color="#3849A2" />
          <h4 className={classes.skillTitle}>C#</h4>
          <div className={classes.skillDesc}>
            While Node.js would be my first choice in choosing a back-end language, learning and using C# has taught me
            various OOP methodologies and patterns which has made me become a better developer and has proven to be
            quite an elegant language.
          </div>
        </div>

        <div className={classes.topSkill}>
          <LargeIcon icon={AMAZON} color="#3849A2" />
          <h4 className={classes.skillTitle}>Amazon Web Services</h4>
          <div className={classes.skillDesc}>
            Being very excited about the rapid growth in serverless technologies, I actively use AWS due to it being one
            step ahead of its competitors and providing an extensive amount of tools and technologies to simplify the
            web development process.
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
  )
}

export default Skills
