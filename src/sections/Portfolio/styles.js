export default {
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '34px',
    textAlign: 'center'
  },
  projectsContainer: {},
  project: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '50px'
  },
  projectReverse: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '50px',
    flexDirection: 'row-reverse'
  },
  projectImgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%'
  },
  projectImg: {
    width: '350px',
    height: '350px',
    maxWidth: 'calc(100% - 20px)',
    borderRadius: '50%',
    border: '10px solid #3F51B5'
  },
  projectInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  projectTitle: {
    fontSize: '2em',
    fontWeight: 500,
    margin: '16px 0'
  },
  projectTags: {
    margin: '16px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  tag: {
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    fontSize: '1.3em',
    fontWeight: 500,
    padding: '6px 16px',
    margin: '0 16px 16px 0',
    border: '1px solid #f5f5f5'
  },
  projectBtn: {
    backgroundColor: '#3F51B5',
    margin: '0 6px',

    '&:hover': {
      backgroundColor: 'black'
    }
  },

  '@media screen and (max-width: 768px)': {
    sectionTitle: { margin: '0' },
    project: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '25px 0',
      borderBottom: '2px solid #3F51B5'
    },
    projectReverse: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '25px 0',
      borderBottom: '2px solid #3F51B5'
    },
    projectImgWrapper: { width: '100%' },
    projectImg: { height: '100%' },
    projectTitle: { textAlign: 'center' },
    projectInfo: { width: '100%' }
  }
}
