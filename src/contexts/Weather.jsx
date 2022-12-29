import {createContext, useState} from 'react'
import axios from 'axios'

import { API_KEY } from '../api_key';

export const WeatherContext = createContext({
    location: {},
    setLocation: () => null,
    zipcode: '',
    setZipcode: () => null,
    weather: {},
    setWeather: () => null
});

export const WeatherProvider = ({children}) => {
    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const [zipcode, setZipcode] = useState('');
    const [digits, setDigits] = useState(false);

    const getZipCode = (e) => {
        setZipcode(e.target.value);
    }
 
    const getLocationData = async (e) => {
        let key = e.key;
        if (key === 'Enter' && zipcode.length === 5) {
            // handles the GET that gets info we need to make the final API call
            // to get the locations weather.

            await axios
            .get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${API_KEY}`)
            .then(data => {
                setLocation(data.data)
                const {lat, lon} = data.data;
                axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclusions=minutely,hourly&appid=${API_KEY}&units=imperial`)
                .then(data => setWeatherData(data.data))
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err));

            setDigits(true);
        }
    }

    // const getWeatherData = async () => {
    //     const {lat, lon} = location;

    //     await axios
    //         .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclusions=minutely,hourly&appid=${API_KEY}&units=imperial`)
    //        .then(data => setWeatherData(data))
    //        .catch(err => console.error(err));
    // }

    const value = {location, setLocation, weatherData, setWeatherData, zipcode, setZipcode, getZipCode, getLocationData, digits, setDigits }

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}