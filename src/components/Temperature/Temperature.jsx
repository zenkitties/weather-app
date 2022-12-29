const Temperature = (props) => {
    return (
        <div className="temperature-data">
            <div className="currentWeatherContainer">
                <div className="currentWeather">
                    <span className="temp">{Math.round(props.temp)}&#176;</span>
                </div>
                <div className="status">
                    <h3>{props.weatherStatus}</h3>
                    <span className="description">"{props.description}"</span>
                </div>
            </div>
            <div className="misc-temp-data">
                <span className="feels_like">Feels like: {Math.round(props.feels_like)}&#176;</span>
                <span className="temp_min_max">Low: {Math.round(props.temp_min)}&#176; High: {Math.round(props.temp_max)}&#176; </span>
                <span className="humidity">Humidity: {Math.round(props.humidity)}%</span>
            </div>
        </div>
    )
}

export default Temperature;