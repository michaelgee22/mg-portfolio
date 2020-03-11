import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  sectionContainer: {
    padding: '0 24px'
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '32px',
    textAlign: 'center'
  },

  expRow: {
    display: 'flex'
  },

  expIntro: {
    width: '25%'
  },
  expIntroTitle: {
    fontSize: '1.8em',
    color: '#3F51B5',
    padding: '6px 0'
  },
  expIntroTime: {
    color: '#8a8a8a',
    fontSize: '1.2em'
  },

  expItem: {
    width: '75%',
    paddingLeft: '34px',
    borderLeft: '3px solid #3F51B5',
    color: '#666'
  },
  expItemTitle: {
    fontSize: '2em',
    fontWeight: 300,
    marginBottom: '10px',
    marginRight: 'auto'
  },
  expItemDesc: {
    lineHeight: 1.5,
    fontSize: '1.6em',
    paddingBottom: '24px'
  },

  mobileIntro: {
    display: 'none'
  },

  '@media screen and (max-width: 768px)': {
    expIntro: { display: 'none' },
    expItem: {
      width: '100%',
      padding: '0',
      border: 'none'
    },
    expItemTitle: { margin: '0' },
    mobileIntro: { display: 'block' }
  }
})
