import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalatte/MiniPalette';
import { withStyles } from '@material-ui/styles';

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
          <div className={classes.palette}>
            { palettes.map(palette => (
              <MiniPalette 
                {...palette}
                handleClick={() => this.goToPalettes(palette.id)} 
                deletePalette={this.props.deletePalette}
                key={palette.id} 
                id={palette.id}  
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
