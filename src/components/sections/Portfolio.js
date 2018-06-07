import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ProjectDialog from '../ProjectDialog';
import Icon from '../Icon';
import { GITHUB } from '../IconList';

const projects = [
  {
    id: 'project-0',
    title: 'Portfolio',
    meta: 'React',
    codeHref: 'https://github.com/michaelgee22/portfolio-react'
  },
  {
    id: 'project-1',
    title: 'CEGMAG Solutions Inc.',
    meta: 'Polymer',
    codeHref: false
  },
  {
    id: 'project-2',
    title: 'Chat-Box',
    meta: 'Polymer & Firebase',
    codeHref: 'https://github.com/michaelgee22/chat-box'
  },
  {
    id: 'project-3',
    title: 'Linkin Park Tribute',
    meta: 'Vue & Firebase',
    codeHref: 'https://github.com/michaelgee22/lp_tribute'
  },
  {
    id: 'project-4',
    title: 'Rough Draft Portfolio',
    meta: 'Polymer',
    codeHref: 'https://github.com/michaelgee22/portfolio'
  },
];

const styles = {
  sectionTitle: {
    fontWeight: 500,
    fontSize: '2.4em',
    marginBottom: '35px',
    textAlign: 'center'
  },
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  project: {
    width: '300px',
    marginBottom: '25px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    borderRadius: '3px',
    backgroundColor: '#3F51B5',
    textAlign: 'center'
  },
  projectTitle: {
    margin: '25px 0 10px 0',
    fontSize: '2em',
    fontWeight: 500,
    color: 'white'
  },
  projectMeta: {
    fontSize: '1.6em',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '15px'
  },
  projectBtns: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '15px'
  },
  previewBtn: { color: 'white' }
};

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      open: false,
      currentProject: { }
    };

    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleDialogOpen(e) {
    let index = e.currentTarget.id.replace(/^\D+/g, '');
    index = parseInt(index);

    console.log(projects[index]);

    this.setState({ open: true, currentProject: projects[index] });
  };

  handleDialogClose = value => {
    this.setState({ open: false });
  };

  renderIconButton(href) {
    if(!href) {
      return <IconButton disabled>
        <Icon icon={GITHUB} />
      </IconButton>
    }

    return <IconButton href={href} target="_blank">
      <Icon icon={GITHUB} />
    </IconButton>
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h2 className={classes.sectionTitle}>Portfolio</h2>

        <div className={classes.projectsContainer}>
          {projects.map(item => {
            return <div key={item.id} className={classes.project}>
              <h3 className={classes.projectTitle}>{item.title}</h3>
              <div className={classes.projectMeta}>{item.meta}</div>

              <div className={classes.projectBtns}>
                {this.renderIconButton(item.codeHref)}

                <Button 
                  id={item.id}
                  className={classes.previewBtn}
                  onClick={this.handleDialogOpen}
                >
                Preview
                </Button>
                <ProjectDialog 
                  currentProject={this.state.currentProject}
                  open={this.state.open}
                  onClose={this.handleDialogClose}
                />
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);