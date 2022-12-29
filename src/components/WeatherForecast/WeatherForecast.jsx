import Location from '../Location/Location'
import Temperature from '../Temperature/Temperature'

import {useContext} from 'react';
import { WeatherContext } from '../../contexts/Weather';

import './WeatherForecast.scss';

const WeatherForecast = () => {
    const {location, digits, weatherData} = useContext(WeatherContext);
    const {lat, lon, name, zip} = location;
    const {weather, main: temps} = weatherData;
    const {description, main: weatherStatus } = weather[0];
    const {temp, feels_like, temp_min, temp_max, humidity} = temps;

    return (
        <div className="weather-forecast-container">
            <h1>Current Forecast</h1>
            { digits &&
                <div className="location-data-container">
                    <Location lat={lat} lon={lon} name={name} zip={zip} />
                    <Temperature description={description} weatherStatus={weatherStatus} temp={temp} feels_like={feels_like} temp_min={temp_min} temp_max={temp_max} humidity={humidity} />
                </div>
            }
        </div>
    )
}

export default WeatherForecast;