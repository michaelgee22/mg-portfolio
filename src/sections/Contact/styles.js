import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '8px',
    textAlign: 'center'
  },
  contactWrapper: {
    display: 'flex'
  },
  contactDesc: {
    fontSize: '1.6em',
    lineHeight: 1.5,
    color: '#666',
    padding: '0 24px'
  },
  contactText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '1.8em'
  },
  btnSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blueText: { color: '#3F51B5' },
  contactBtn: {
    margin: '0 10px',
    backgroundColor: '#3F51B5',

    '&:hover': {
      backgroundColor: 'black'
    }
  },

  '@media screen and (max-width: 768px)': {
    sectionTitle: { marginBottom: '14px' },
    contactWrapper: { flexDirection: 'column' },
    contactImg: { margin: '0 auto' },
    contactDesc: {
      width: 'calc(100% - 50px)',
      padding: '0 24px',
      margin: '20px 0 6px 0',
      textAlign: 'center'
    }
  }
})
