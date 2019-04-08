import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ({ cities, onSelectedLocation}) => {
    const handleWeatherLocation = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    const strToComponent = cities => (
        cities.map(city => (
            <WeatherLocation 
                key={city} 
                city={city} 
                onWeatherLocationClick={ () => handleWeatherLocation(city)} />))
      );
 return( <div>
    {strToComponent(cities)}

  </div>);
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation:PropTypes.func,
};

export default LocationList;
