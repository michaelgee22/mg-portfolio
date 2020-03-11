import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  sectionContainer: {
    textAlign: 'center'
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '24px'
  },
  topSkillsTitle: {
    fontSize: '2em',
    color: '#8a8a8a',
    fontWeight: 300,
    marginBottom: '32px'
  },
  topSkills: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '32px'
  },
  skillTitle: {
    fontWeight: 500,
    fontSize: '2.2em',
    margin: '20px 0'
  },
  skillDesc: {
    color: '#666',
    padding: '0 25px',
    fontSize: '1.4em'
  },
  otherSkills: {
    maxWidth: '650px',
    margin: '0 auto'
  },
  otherSkill: {
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    display: 'inline-block',
    fontSize: '1.6em',
    fontWeight: 500,
    padding: '6px 30px',
    margin: '0 16px 16px 0',
    border: '1px solid #f5f5f5'
  },

  '@media screen and (max-width: 768px)': {
    sectionTitle: { marginBottom: '16px' },
    topSkillsTitle: { marginBottom: '16px' },
    skillTitle: { margin: '10px 0' },
    topSkills: { flexDirection: 'column', marginBottom: '0' },
    topSkill: { marginBottom: '16px' },
    skillDesc: { paddingBottom: '16px' }
  }
})
