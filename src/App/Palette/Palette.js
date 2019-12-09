import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import styles from './PaletteStyles';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    }
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  
  changeLevel(level) {
    this.setState({ level })
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.id}
        moreURL={`/palette/${id}/${color.id}`}
        isFullPalette={true}
      />
    ));

    return(
      <div className={classes.palette}>
        <Navbar 
          level={level} 
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showSlider={true}
        />

        <div className={classes.paletteColors}>
          {colorBoxes}
        </div>

        <Footer 
          paletteName={paletteName}
          emoji={emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);