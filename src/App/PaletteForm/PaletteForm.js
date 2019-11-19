import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import {ChromePicker} from 'react-color';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';

import styles from "./PaletteFormStyles";

class PaletteForm extends Component {
  static defaultProps = {

  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: "teal",
      newName: "",
      colors: []
    }
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleNewName = this.handleNewName.bind(this);
    this.handleSave = this.handleSave.bind(this);

  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
      this.state.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) => 
      this.state.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    );
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex })
  }

  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName
    }
    this.setState({ colors: [...this.state.colors, newColor], newName: "", currentColor: "" })
  }

  handleNewName(evt) {
    this.setState({newName: evt.target.value})
  }

  handleSave() {
    let newName = "text new palette";
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/")
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          color="default"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={this.handleSave}
            >
              Save Palette
            </Button>
          </Toolbar>
        </AppBar>
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
          <Typography variant="h4" >
            Design Your Palette
          </Typography>
          <div>
            <Button 
              variant="contained" 
              color="secondary" 
            >
              Clear Palette
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
            >
              Ramdon Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.updateCurrentColor}
          
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator 
              value={this.state.newName}
              onChange={this.handleNewName}
              validators={[
                "required", 
                "isColorNameUnique", 
                "isColorUnique"
              ]}
              errorMessages={[
                "Enter color name", 
                "Color name must be unique", 
                "Color already picked"
              ]}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{backgroundColor:this.state.currentColor}}
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
          [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.colors.map(color => (
            <DraggableColorBox color={color.color} name={color.name} />
          ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(PaletteForm);
