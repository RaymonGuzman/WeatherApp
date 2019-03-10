import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfoCont">
    <span className='extraInfoText'>{`${humidity}%`}</span>
    <span className='extraInfoText'>{`${wind} wind`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};


export default WeatherExtraInfo;
