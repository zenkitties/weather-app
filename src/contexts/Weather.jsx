import {createContext, useState} from 'react'
import axios from 'axios'

import { API_KEY } from '../api_key';
import COUNTRIES from '../countries.json';

export const WeatherContext = createContext({
    location: {},
    setLocation: () => null,
    zipcode: '',
    setZipcode: () => null,
    weather: {},
    setWeather: () => null,
    country: '',
    setCountry: () => null,
    foundCountry: '',
    setFoundCountry: () => null
});

export const WeatherProvider = ({children}) => {
    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState(null);
    const [zipcode, setZipcode] = useState('');
    const [digits, setDigits] = useState(false);
    const [country, setCountry] = useState('');
    const [foundCountries, setFoundCountries] = useState(COUNTRIES);
    const [countryCode, setCountryCode] = useState(null);

    const getZipCode = (e) => {
        setZipcode(e.target.value);
    }

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = COUNTRIES.filter(country => {
                // use the toLowerCase() method to make it case-insensitive
                return country.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundCountries(results);
        } else {
            // If the text field is empty, show all countries.
            setFoundCountries(COUNTRIES);
        }

        setCountry(keyword);
    }

    const setIsoCode = (iso, selected) => {
        setCountryCode(iso);
        setFoundCountries(foundCountries.map(country =>  country.iso2 === iso ? {...country, "selected": !selected} : {...country, "selected": false}));
    };
 
    const getLocationData = async (e) => {
        let key = e.key;
        if (key === 'Enter' && !countryCode) {
            alert('You must selected a country first.')
        }

        if (key === 'Enter' && countryCode) {
            // handles the GET that gets info we need to make the final API call
            // to get the locations weather.

            await axios
            .get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode}&appid=${API_KEY}`)
            .then(data => {
                setLocation(data.data)
                const {lat, lon} = data.data;
                axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclusions=minutely,hourly&appid=${API_KEY}&units=imperial`)
                .then(data => setWeatherData(data.data))
                .catch(err => console.error(err));
            })
            .catch(err => alert('Not a valid zip code for that country.'));

            setDigits(true);
        }
    }

    const value = {location, setLocation, weatherData, setWeatherData, zipcode, setZipcode, getZipCode, getLocationData, digits, setDigits, country, setCountry, foundCountries, setFoundCountries, filter, setIsoCode }

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}