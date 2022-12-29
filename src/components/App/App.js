import {useContext} from 'react';
import { WeatherContext } from '../../contexts/Weather';

import Header from '../Header/Header'
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import WeatherInput from '../WeatherInput/WeatherInput'

import './app.scss';

const App = () => {
  const {zipcode, weatherData} = useContext(WeatherContext);

  return (
    <div className="App">
      <Header></Header>
      <WeatherInput name="weather" placeholder="zipcode" value={zipcode} />
      {weatherData && <WeatherForecast />}
    </div>
  );
}

export default App;
