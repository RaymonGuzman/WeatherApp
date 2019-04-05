import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
} from '../../../constants/weather';

const stateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
      return 'cloud';
    case SUN:
      return 'day-sunny';
    case RAIN:
      return 'rain';
    case SNOW:
      return 'snow';
    default:
      return 'day-sunny';
  }
};

const getWeatherIcon = weatherState => (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);


const WeatherTemperature = ({ temperature, weatherState }) => (


  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className='temperature'>{`${temperature} `}</span>
    <span className='temperaturetype'>Cº </span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};
export default WeatherTemperature;
