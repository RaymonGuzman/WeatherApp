import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import propTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../services/transformWeather';
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


const apiKey = '8840ac59c60e363c8fae13d0fbdc7e71';

const url = 'http://api.openweathermap.org/data/2.5/weather';

/* const data2 = {
  temperature: 18,
  weatherState: WINDY,
  humidity: 5,
  wind: '19 m/s',

}; */


class WeatherLocation extends Component {
  constructor({ city }) {
    super();
    this.state = {
      city,
      data: null,
    };
  }


  componentWillMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    const { city } = this.state;
    const apiWeather = `${url}?q=${city}&appid=${apiKey}`;
    fetch(apiWeather).then((data) => {
      console.log(data);
      return data.json();
    }).then((myWeather) => {
      const data = transformWeather(myWeather);
      this.setState({ data });
      console.log(myWeather);
    });


    console.log('Actualizado');
  }

render = () => {
  const { onWeatherLocationClick } = this.props;
  const { city, data } = this.state;
  return (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
      <Location city={city} />
      {data ? <WeatherData data={data} />
        : <CircularProgress size={60} thickness={7} />}
    </div>
  );
};
}
WeatherLocation.propTypes = {
  city: propTypes.string,
  onWeatherLocationClick:propTypes.func,

};

export default WeatherLocation;
