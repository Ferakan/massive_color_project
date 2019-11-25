import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from 'react-router-dom';

import styles from './PaletteFormNavStyles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('paletteNameUnique', (value) => 
      this.props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const { classes, open, handleSave, handleDrawerOpen } = this.props;
    const { newPaletteName } = this.state;
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
              onClick={handleDrawerOpen}
              edge="start"
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <ValidatorForm onSubmit={() => handleSave(newPaletteName)}>
              <TextValidator 
                value={newPaletteName}
                name="newPaletteName"
                label="Palette Name"
                onChange={this.handleChange}
                validators={[
                  "required",
                  "paletteNameUnique"
                ]}
                errorMessages={[
                  "Enter Palette Name",
                  "Palette Name Already Used"
                ]}
              />
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
              >
                Save Palette
              </Button>
            </ValidatorForm>
            <Link to="/">
              <Button 
                variant="contained" 
                color="secondary"
              >
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav);
