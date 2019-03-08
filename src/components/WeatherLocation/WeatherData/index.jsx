import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from '../../../constants/weather';

const WeatherData = () => (
  <div className="weatherDataCont">
    <WeatherTemperature temperature={20} weatherState={RAIN} />
    <WeatherExtraInfo humidity={80} wind="10m/s" />

  </div>
);

export default WeatherData;
