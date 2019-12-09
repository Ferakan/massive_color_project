import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {ChromePicker} from 'react-color';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import styles from './ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: "",
    }
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddColor = this.handleAddColor.bind(this);
  }
  
  componentDidMount() {
    ValidatorForm.addValidationRule('colorNameUnique', (value) => 
      this.props.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('colorUnique', (value) => 
      this.props.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    );
  };

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleAddColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { classes, paletteIsFull } = this.props;

    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm 
          onSubmit={this.handleAddColor}
          ref='form'
          instantValidate={false}
        >
          <TextValidator
            className={classes.colorNameInput} 
            value={this.state.newColorName}
            placeholder="Color Name"
            name="newColorName"
            variant="filled"
            margin="normal"
            onChange={this.handleChange}
            validators={[
              "required", 
              "colorNameUnique", 
              "colorUnique"
            ]}
            errorMessages={[
              "Enter color name", 
              "Color name must be unique", 
              "Color already picked"
            ]}
          />
          <Button
            className={classes.addColor}
            variant="contained"
            type="submit"
            color="primary"
            style={{backgroundColor:
              paletteIsFull ? "rgba(0, 0, 0, 0.12)" : this.state.currentColor}}
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm);
