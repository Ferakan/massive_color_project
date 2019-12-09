import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from "@material-ui/icons/Delete";

import styles from './MiniPaletteStyles';

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.openDeleteDialog = this.openDeleteDialog.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openDeleteDialog(e) {
    e.stopPropagation();
    this.props.openDeleteDialog(this.props.id);
  }

  handleClick() {
    this.props.goToPalettes(this.props.id);
  }

  render() {
    const {classes, paletteName, emoji, colors} = this.props;
    const miniColorBoxes = colors.map(color => (
      <div 
        className={classes.miniColor} 
        style={{ background: color.color }}
        key={color.name}
      />
    ));
    return(
      <div className={classes.root} onClick={this.handleClick}>
        <div className={classes.delete}>
          <DeleteIcon 
            className={classes.deleteIcon}
            onClick={this.openDeleteDialog}
          />
        </div>
        <div className={classes.colors}>
          {miniColorBoxes}
        </div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji} > 
            {emoji}
          </span>
        </h5>
      </div>
    )
  }
}

export default withStyles(styles)(MiniPalette);