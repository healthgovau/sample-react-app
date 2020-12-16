import React from "react";
import PropTypes from "prop-types";

import styles from "./Display.module.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className={styles["component-display"]}>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
