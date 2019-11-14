import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const styles = {
  palette: {
    height: "100vh"
  },
  paletteColors: {
    height: "90%",
    overflow: "hidden"
  },
  goBack: {
    width: "20%",
    height: "50%",
    backgroundColor: "black",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textDecoration: "none",
      textTransform: "uppercase",
      border: "none",
      cursor: "pointer",
    }
  }
}

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex"
    }
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }  

  render() {
    const { format } = this.state;
    const { classes } = this.props;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        isFullPalette={false}
      />
    ))

    return (
      <div className={classes.palette}>
        <Navbar 
          handleChange={this.changeFormat}
          showSlider={false}
        />

        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>

        <Footer 
          paletteName={paletteName}
          emoji={emoji}
        />

      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette);
