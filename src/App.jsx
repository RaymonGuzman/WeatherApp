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
  render = () => {
    return (
      <MuiThemeProvider>
        <div className="App">

          <LocationList cities={cities}/>

        </div>
      </MuiThemeProvider>
    );
  };
}

export default App;
