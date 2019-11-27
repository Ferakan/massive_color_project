import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import PaletteMetaForm from '../PaletteMetaForm/PaletteMetaForm';

import styles from './PaletteFormNavStyles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      formOpen: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  showForm() {
    this.setState(prevState => ({
      formOpen: !prevState.formOpen
    }));
  }

  render() {
    const { classes, open, handleDrawerOpen, palettes } = this.props;
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
            <Link to="/">
              <Button
                className={classes.button} 
                variant="contained" 
                color="secondary"
              >
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button} 
              variant="contained" 
              color="primary" 
              onClick={this.showForm}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {this.state.formOpen &&             
          <PaletteMetaForm
            formOpen={this.state.formOpen}
            palettes={palettes}
            handleSave={this.props.handleSave}
            showForm={this.showForm}
          />
        }
      </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav);
