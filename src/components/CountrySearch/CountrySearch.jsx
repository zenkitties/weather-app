import {useContext} from 'react';
import CountryList from '../CountryList/CountryList';

import { WeatherContext } from '../../contexts/Weather';

import './countrySearch.scss';

const CountrySearch = () => {
    const {filter, country} = useContext(WeatherContext);

    return (
        <div className="countries-search-container">
            <input type="search" value={country} className="input" onChange={filter} name="country-search-input" />
            <label>COUNTRY</label>
            { country &&
            <CountryList />
            }   
        </div>
    )
}

export default CountrySearch;