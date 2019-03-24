import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
 /* eslint-disable */
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from '../../constants/weather';
/* eslint-enable */
import './styles.css';

const location = "Santo Domingo,DO";
const apiKey="8840ac59c60e363c8fae13d0fbdc7e71";

const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;

const data1 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',

};

/* const data2 = {
  temperature: 18,
  weatherState: WINDY,
  humidity: 5,
  wind: '19 m/s',

}; */


class WeatherLocation extends Component {
  
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires!", 
      data: data1
    };
  }
  
  handleUpdateClick = () => {
    fetch(apiWeather).then( data => {
      console.log(data);
      return data.json();
    }).then( MyWeather => {
      console.log(MyWeather);
      debugger;
    });
    
    
    console.log("Actualizado");
  }

render = () => (

  <div className="weatherLocationCont">
    <Location city={this.state.city} />
    <WeatherData data={this.state.data}/>
    <button onClick={this.handleUpdateClick}>Actualizar</button>
  </div>
);

}

export default WeatherLocation;
