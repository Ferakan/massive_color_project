import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalatte/MiniPalette';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from "./PaletteListStyles";

class PaletteList extends Component {
  goToPalettes(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">
              Create Palette
            </Link>
          </nav>
          <TransitionGroup className={classes.palette}>
            { palettes.map(palette => (
              <CSSTransition
                key={palette.id}
                classNames="fade"
                timeout={500}
              >
                <MiniPalette 
                  {...palette}
                  handleClick={() => this.goToPalettes(palette.id)} 
                  deletePalette={this.props.deletePalette}
                  key={palette.id} 
                  id={palette.id}  
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={true}
        >
          <DialogTitle>
            Delete This Palette?
          </DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
