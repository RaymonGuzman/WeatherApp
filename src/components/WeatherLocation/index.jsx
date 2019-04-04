import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';
import transformWeather from './../../services/transformWeather';

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

const location = "Santo Domingo,DO";
const apiKey="8840ac59c60e363c8fae13d0fbdc7e71";

const apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;



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
      city: "Santo Domingo", 
      data: null
    };
  }

 
  
  handleUpdateClick = () => {
    fetch(apiWeather).then( data => {
      console.log(data);
      return data.json();
    }).then( myWeather => {
      const data = transformWeather(myWeather);
      this.setState({data});
      console.log(myWeather);
      debugger;
    });
    
    
    console.log("Actualizado");
  }

  
  componentWillMount() {
    this.handleUpdateClick();
  }
  

render = () => {

  const { city, data} = this.state;
  return(
  <div className="weatherLocationCont">
    <Location city={city} />
    {data ? <WeatherData data={data}/> : 
    <CircularProgress size={60} thickness={7} />}
  </div>);
};

}

export default WeatherLocation;
