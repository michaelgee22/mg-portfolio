import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
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
    margin: '40px auto',
    padding: '40px 24px',
    borderRadius: '3px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)'
  },

  '@media screen and (max-width: 768px)': {
    portfolioSection: {
      width: 'calc(100% - 50px)',
      margin: '24px auto'
    }
  }
})
