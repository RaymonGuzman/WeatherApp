import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
     <Grid fluid>
        <Row>
          <Col xs={12} sm= {6} md={4} lg={3}>
          <div className="red">Hello, world!</div>
          </Col>
          <Col xs={12} sm= {6} md={4} lg={3}>
            <div className="green">Hello, world!</div>            
          </Col>
          <Col xs={12} sm= {6} md={4} lg={3}>
            <div className="blue">Hello, world!</div>
          </Col>
          <Col xs={12} sm= {6} md={4} lg={3}>
            <div className="yellow">Hello, world!</div>
          </Col>
        </Row>
        
      </Grid>
     
     {/*    <div className="App">

          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>

        </div> */}
      </MuiThemeProvider>
    );
  };
}

export default App;
