import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  sectionContainer: { padding: '0 16px' },
  introContainer: {
    maxWidth: '406px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '24px',
    textAlign: 'center'
  },
  eduTitle: {
    fontWeight: 500,
    color: '#3F51B5',
    fontSize: '2em',
    margin: '0'
  },
  eduTags: {
    fontSize: '1.6em'
  },
  eduTime: {
    color: '#8a8a8a',
    marginBottom: '16px',
    fontSize: '1.5em'
  },
  eduDesc: {
    fontSize: '1.6em',
    lineHeight: 1.5,
    padding: '0 24px',
    color: '#666'
  },

  '@media screen and (max-width: 600px)': {
    sectionContainer: { textAlign: 'center' }
  }
})
