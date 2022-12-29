import {useContext} from 'react'
import { WeatherContext } from '../../contexts/Weather';

import './weatherInput.scss';

// TODO
//link up WeatherProvider zipcode to this input on Enter press

const Input = (props) => {
    const {getZipCode, getLocationData} = useContext(WeatherContext);

    return (
        <div className="weather-input-container">
            <input className="weather-input" name={props.name} placeholder={props.placeholder} value={props.value} onChange={getZipCode} onKeyPress={getLocationData} />
        </div>
    )
};
        

export default Input;