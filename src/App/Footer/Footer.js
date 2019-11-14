import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  paletteFooter: {
    backgroundColor: "white",
    height: "4vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  paletteEmoji: {
    margin: "0 1rem"
  }
}


class Footer extends Component {
  render() {
    const { paletteName, emoji, classes } = this.props;
    return (
      <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.paletteEmoji}>
          {emoji}
        </span>
      </footer>
)
  }
}

export default withStyles(styles)(Footer);
