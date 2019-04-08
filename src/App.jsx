import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Santo Domingo,DO',
  'San Cristóbal,DO',
  'Constanza,DO',
  'Bonao,DO',
  'Neiba,DO',
  'Ottawa,CAN',
  'Arizona,US'
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render = () => {
    return (

      <MuiThemeProvider>
        <div className="App">

          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>

        </div>
      </MuiThemeProvider>
    );
  };
}

export default App;
