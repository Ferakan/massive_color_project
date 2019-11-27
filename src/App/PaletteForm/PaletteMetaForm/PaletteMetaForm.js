import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css';
import "./PaletteMetaFormStyles.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      selectedEmoji: {},
      newPaletteName: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeStage = this.changeStage.bind(this);
    this.selectEmoji = this.selectEmoji.bind(this);
    this.savePalette = this.savePalette.bind(this);
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

  changeStage() {
    this.setState({ stage: this.state.stage === "form" ? "emoji" : "form" });
  }

  selectEmoji(slcEmoji) {
    const newEmoji = slcEmoji;
    this.setState({ selectedEmoji: newEmoji });
  }

  savePalette() {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: this.state.selectedEmoji.native
    };
    this.props.handleSave(newPalette);
  }

  render() {
    const { showForm } = this.props;
    const { newPaletteName, stage, selectedEmoji } = this.state;

    return (
      <div>
        <Dialog 
          open={stage === "form"} 
          onClose={showForm} 
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle 
            id="form-dialog-title"
          >
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.changeStage}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for the palatte you just created. Make sure it's unique!
              </DialogContentText>
              <TextValidator 
                value={newPaletteName}
                name="newPaletteName"
                label="Palette Name"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={[
                  "required",
                  "paletteNameUnique"
                ]}
                errorMessages={[
                  "Enter Palette Name",
                  "Palette Name Already Used"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button 
                onClick={showForm} 
                color="primary"
                >
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
              >
                Next
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
        <Dialog 
          open={stage === "emoji"}
          onClose={showForm} 
        >
          <DialogTitle 
            id="form-dialog-title"
          >
            Choose a Palette Emoji
          </DialogTitle>

          <Picker
            onSelect={this.selectEmoji}
            title={selectedEmoji.name}
            emoji={selectedEmoji.id}
          />
          <DialogActions>
            <Button 
              onClick={this.changeStage} 
              color="primary"
              >
              Back
            </Button>
            <Button 
              variant="contained" 
              color="primary"
              onClick={this.savePalette}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default PaletteMetaForm;
