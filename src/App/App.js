import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import Palette from './Palette/Palette';
import PaletteList from './PaletteList/PaletteList';
import SingleColorPalette from './SingleColorPalette/SingleColorPalette';
import PaletteForm from './PaletteForm/PaletteForm';
import seedPalettes from './Utils/seedPalettes';
import {generatePalette} from './Utils/colorHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedPalettes
    }
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  
  savePalette(newPalette) {
    this.setState({palettes: [...this.state.palettes, newPalette] })
  }

  render() {
    return (
      <Switch>
        <Route 
          exact 
          path="/" 
          render={routeProps => ( 
            <PaletteList
              palettes={this.state.palettes }
              {...routeProps} 
            /> 
          )} 
        />

        <Route 
          exact
          path="/palette/new"
          render={ routeProps => (
            <PaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
        />

        <Route 
          exact 
          path="/palette/:id" 
          render={ routeProps => (
            <Palette 
              palette={generatePalette(this.findPalette(routeProps.match.params.id))} 
            /> 
          )} 
        />

        <Route 
          exact
          path="/palette/:paletteId/:colorId"
          render={ routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId} 
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            /> 
          )}
        />
      </Switch>
    );
  }
}

export default App;
