import React from "react";
import PropTypes from "prop-types";

const Icon = props => (
  <svg width="100" height="100" viewBox="0 0 24 24">
    <path fill={props.color} d={props.icon} />
  </svg>
);

Icon.defaultProps = {
  color: "#fff"
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Icon;
