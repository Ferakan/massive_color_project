import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import {arrayMove} from 'react-sortable-hoc';

import PaletteFormNav from './PaletteFormNav/PaletteFormNav';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm';

import styles from "./PaletteFormStyles";

class PaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: this.props.palettes[0].colors,
    }
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.deleteColorBox = this.deleteColorBox.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.randomColor = this.randomColor.bind(this);
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState({ colors: [...this.state.colors, newColor], newColorName: "", currentColor: "" })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSave(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/")
  }

  deleteColorBox(colorName) {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearPalette() {
    this.setState({ colors: [] })
  }

  randomColor() {
    const allColors = this.props.palettes.map(p => p.colors).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav 
          open={open}
          classes={classes}
          palettes={palettes}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSave={this.handleSave} 
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" >
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button 
                variant="contained" 
                color="secondary"
                onClick={this.clearPalette} 
              >
                Clear Palette
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={this.randomColor}
                disabled={paletteIsFull} 
              >
                {paletteIsFull ? "Palette Full" : "random Color"}
              </Button>
            </div>
            <ColorPickerForm 
              colors={colors}
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColor}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
          [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList 
            colors={colors} 
            deleteColorBox={this.deleteColorBox}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(PaletteForm);
