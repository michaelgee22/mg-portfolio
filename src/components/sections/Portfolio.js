import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import ProjectDialog from "../ProjectDialog";
import Icon from "../Icon";
import { GITHUB, GO_ARROW, OPEN_BOOK } from "../IconList";

import cegmag from "../../images/cegmag.png";
import chatbox from "../../images/chatbox.png";
import portfolio from "../../images/portfolio.png";
import lp from "../../images/lp.png";

const projects = [
  {
    id: "cegmag-0",
    className: "project",
    title: "CEGMAG Solutions Inc",
    tags: ["JavaScript", "Polymer", "HTML5", "CSS3", "Git"],
    codeHref: false,
    href: "https://website-eeb2b.firebaseapp.com/",
    image: cegmag,
    imageAlt: "CEGMAG Solutions Inc. Project",
    desc:
      "A group of projects & websites built from scratch using a variety of JavaScript libraries/frameworks or Wordpress. I worked as a sole developer remotely building user interfaces mainly with JavaScript Web Components with the Polymer Library. I also worked directly with clients to implement feature requests in Wordpress websites using React components.  I spent a lot of time becoming vastly familiar with the JavaScript ecosystem and being involved in all aspects of development including planning, development, design, testing, performance improvement, maintenance, security, etc. "
  },
  {
    id: "chat-box-2",
    className: "projectReverse",
    title: "Chat-box",
    tags: ["JavaScript", "Polymer", "Firebase", "HTML5", "CSS3", "Git"],
    codeHref: "https://github.com/michaelgee22/chat-box",
    href: "https://mgchatbox.com/",
    image: chatbox,
    imageAlt: "Chat-Box Project",
    desc:
      "A multi-thread chat application built with web components (Polymer library) along with Firebase to provide real-time data messaging between users and an easy authentication method. My main focus with project was to make a fast and functional chat experience while implementing a great user experience that works across all platforms."
  },
  {
    id: "lp-tribute-3",
    className: "project",
    title: "Linkin Park Tribute",
    tags: ["JavaScript", "Vue", "Firebase", "HTML5", "CSS3", "Git"],
    codeHref: "https://github.com/michaelgee22/lp_tribute",
    href: "https://linkin-park-tribute.firebaseapp.com/",
    image: lp,
    imageAlt: "Linkin Park Project",
    desc:
      "A Vue.js project utilizing the Vuetify framework to implement Material Design components. Simple UI/UX, component organization and utilizing/learning the core features of Vue were the main focuses of this project. This is another project I elected to use Firebase to provide an easy web hosting solution along with lightning fast data fetching to display all of the band’s songs and albums. "
  }
];

const styles = {
  sectionTitle: {
    fontWeight: 500,
    fontSize: "2.4em",
    marginBottom: "35px",
    textAlign: "center"
  },
  projectsContainer: {},
  project: {
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "50px"
  },
  projectReverse: {
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "50px",
    flexDirection: "row-reverse"
  },
  projectImgWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "50%"
  },
  projectImg: {
    width: "350px",
    height: "350px",
    maxWidth: "calc(100% - 20px)",
    borderRadius: "50%",
    border: "10px solid #3F51B5"
  },
  projectInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%"
  },
  projectTitle: {
    fontSize: "2em",
    fontWeight: 500,
    margin: "15px 0"
  },
  projectTags: {
    margin: "15px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  tag: {
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    fontSize: "1.3em",
    fontWeight: 500,
    padding: "6px 15px",
    margin: "0 15px 15px 0",
    border: "1px solid #f5f5f5"
  },
  projectBtn: {
    backgroundColor: "#3F51B5",
    margin: "0 5px",

    "&:hover": {
      backgroundColor: "black"
    }
  },

  "@media screen and (max-width: 768px)": {
    sectionTitle: { margin: "0" },
    project: {
      flexDirection: "column",
      alignItems: "center",
      padding: "25px 0",
      borderBottom: "2px solid #3F51B5"
    },
    projectReverse: {
      flexDirection: "column",
      alignItems: "center",
      padding: "25px 0",
      borderBottom: "2px solid #3F51B5"
    },
    projectImgWrapper: { width: "100%" },
    projectImg: { height: "100%" },
    projectTitle: { textAlign: "center" },
    projectInfo: { width: "100%" }
  }
};

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      desc: ""
    };

    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleDialogOpen(e) {
    let index = e.currentTarget.id.replace(/^\D+/g, "");
    index = parseInt(index);

    this.setState({
      open: true,
      desc: projects[index].desc
    });
  }

  handleDialogClose() {
    this.setState({ open: false, desc: "" });
  }

  renderGithubIconButton(href, classes) {
    if (!href) {
      return false;
    }

    return (
      <Tooltip title="Source Code">
        <IconButton href={href} target="_blank" className={classes.projectBtn}>
          <Icon icon={GITHUB} />
        </IconButton>
      </Tooltip>
    );
  }

  renderVisitIconButton(href, classes) {
    if (!href) {
      return false;
    }

    return (
      <Tooltip title="View Project">
        <IconButton href={href} target="_blank" className={classes.projectBtn}>
          <Icon icon={GO_ARROW} />
        </IconButton>
      </Tooltip>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h2 className={classes.sectionTitle}>Portfolio</h2>

        <div className={classes.projectsContainer}>
          {projects.map(item => (
            <div key={item.id} className={classes[item.className]}>
              <div className={classes.projectImgWrapper}>
                <img
                  src={item.image}
                  className={classes.projectImg}
                  alt={item.imageAlt}
                />
              </div>

              <div className={classes.projectInfo}>
                <h3 className={classes.projectTitle}>{item.title}</h3>
                <div className={classes.projectTags}>
                  {item.tags.map(tag => (
                    <div className={classes.tag} key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>

                <div>
                  {this.renderGithubIconButton(item.codeHref, classes)}

                  <Tooltip title="Description">
                    <IconButton
                      id={item.id}
                      onClick={this.handleDialogOpen}
                      className={classes.projectBtn}
                    >
                      <Icon icon={OPEN_BOOK} />
                    </IconButton>
                  </Tooltip>
                  <ProjectDialog
                    open={this.state.open}
                    onClose={this.handleDialogClose}
                    desc={this.state.desc}
                  />

                  {this.renderVisitIconButton(item.href, classes)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
