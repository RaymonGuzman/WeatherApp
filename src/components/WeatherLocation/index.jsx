import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from '../../constants/weather';

const data = {
  temperature: 30,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',

};

const WeatherLocation = () => (
  <div className="weatherLocationCont">
    <Location city="Buenos Aires!" />
    <WeatherData data={data} />
  </div>
);


export default WeatherLocation;
