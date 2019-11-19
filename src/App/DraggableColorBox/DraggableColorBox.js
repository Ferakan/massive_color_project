import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";

import styles from "./DraggableColorBoxStyles";

class DraggableColorBox extends Component {
  render() {
    const { classes, name } = this.props;
    return (
      <div className={classes.root} >
        <div className={classes.boxContent}>
          {name}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(DraggableColorBox);
