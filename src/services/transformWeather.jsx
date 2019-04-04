
import convert from 'convert-units';
/* eslint-disable */
 
 import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
  } from './../constants/weather';
  /* eslint-enable */

const getTemp = kelvin => (Number(convert(kelvin).from('K').to('C').toFixed(2)));

const getWeatherState = weather => SUN;

const transformWeather = (myWeather) => {
  const { humidity, temp } = myWeather.main;
  const { speed } = myWeather.wind;
  const weatherState = getWeatherState(SUN);
  const temperature = getTemp(temp);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,

  };

  return data;
};


export default transformWeather;
