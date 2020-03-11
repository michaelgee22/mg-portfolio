import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  topBar: {
    backgroundColor: '#32408F',
    padding: '8px'
  },
  topBarIcons: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  topBarIcon: { marginRight: '6px' },
  // topBarBtn: {
  //   color: 'white',
  //   marginRight: '5px'
  // },
  // btnText: { marginLeft: '5px' },

  introSection: {
    backgroundColor: '#3849A2',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  portfolioImg: {
    width: '175px',
    height: '175px',
    marginTop: '15px',
    border: '5px solid white',
    borderRadius: '50%'
  },
  mainTitle: {
    fontSize: '4.8em',
    padding: '15px 0 5px 0',
    textAlign: 'center'
  },
  secondaryTitle: {
    fontSize: '2.8em',
    padding: '5px 0',
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  introDesc: {
    maxWidth: '800px',
    fontSize: '1.6em',
    lineHeight: '1.5',
    textAlign: 'center',
    padding: '0 15px 15px 15px'
  },

  contactSection: {
    backgroundColor: '#32408F',
    color: 'white',
    fontSize: '1.6em',
    padding: '25px 0'
  },
  contactContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactItem: { display: 'flex', marginRight: '30px' },
  contactText: { marginLeft: '10px', marginTop: '3px' },

  navSection: {
    backgroundColor: '#2B387C',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  navBtn: { color: 'rgba(255, 255, 255, 0.8)' },

  '@media screen and (max-width: 768px)': {
    navSection: { display: 'none' },
    mainTitle: { fontSize: '3.2em' },
    secondaryTitle: { fontSize: '2.4em' }
  },

  '@media screen and (max-width: 600px)': {
    contactContent: { flexDirection: 'column' },
    contactItem: { margin: '0', padding: '5px 0' },
    contactSection: { padding: '10px 0' }
  }
})
