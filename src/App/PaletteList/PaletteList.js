import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalatte/MiniPalette';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { blue, red } from '@material-ui/core/colors';

import styles from "./PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: ""
    }
    this.toggleDialog = this.toggleDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalettes = this.goToPalettes.bind(this);
  }

  goToPalettes(id) {
    this.props.history.push(`/palette/${id}`);
  }

  toggleDialog(id) {
    this.setState(prevState => ({
      openDeleteDialog: !prevState.openDeleteDialog,
      deletingId: this.state.deletingId === "" ? id : ""
    }));
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.toggleDialog();
  }

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>
              <span className={classes.letterR}>R</span>eact <span className={classes.letterC}>C</span>olor <span className={classes.letterP}>P</span>icker
            </h1>
            <Button 
              className={classes.createBtn}
              variant="contained"
            >
              <Link to="/palette/new">
                Create Palette
              </Link>
            </Button>
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
                  goToPalettes={this.goToPalettes} 
                  openDeleteDialog={this.toggleDialog}
                  key={palette.id} 
                  id={palette.id}  
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.toggleDialog}
        >
          <DialogTitle
            id="delete-dialog-title"
          >
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem 
              button
              onClick={this.handleDelete}
            >
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }} >
                  <CheckIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem 
              button
              onClick={this.toggleDialog}
            >
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
