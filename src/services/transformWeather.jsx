
import convert from 'convert-units';
/* eslint-disable */
 
 import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER
  } from './../constants/weather';
  /* eslint-enable */

const getTemp = kelvin => (Number(convert(kelvin).from('K').to('C').toFixed(2)));

const getWeatherState = (weather) => {
  const { id } = weather[0];

  if (id < 300) 
  {
    return THUNDER;
  } 
  if (id < 500) 
  {
    return DRIZZLE;
  } 
  if (id < 600) 
  {
    return RAIN;
  } 
  if (id < 800) 
  {
    return SNOW;
  } 
  if (id === 800)
  {
    return SUN;
  } 
  if (id > 800) 
  {
    return CLOUD; 
  }
};

const transformWeather = (myWeather) => {
  const { weather } = myWeather;
  const { humidity, temp } = myWeather.main;
  const { speed } = myWeather.wind;
  const weatherState = getWeatherState(weather);
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
