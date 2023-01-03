import {useContext, useState} from 'react';

import { WeatherContext } from '../../contexts/Weather';

import './countryList.scss';


const CountryList = () => {
    const {foundCountries, setIsoCode, countryCode} = useContext(WeatherContext);
    
    const getCountries = (country, index) => {
        const {name, iso2, selected} = country;

        return (
        <li className={`country-item ${selected && 'selected'}`} key={index} value={iso2} onClick={() => setIsoCode(iso2)}>{name}</li>
        )
    }
    
    return (
        
        <div className="user-list">
            {!countryCode &&
                <ul>
                {foundCountries.map(getCountries)}
                </ul>
            }
        </div>
        
    )
}

export default CountryList;