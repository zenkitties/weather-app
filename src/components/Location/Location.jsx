const Location = (props) => {
    return (
        <div className="location-data">
            <h2>{props.name}</h2>
            <div className="zip-and-coords">
                <h4>{props.zip}</h4>
                <span>Lat: {props.lat}, Lon: {props.lon}</span>
            </div>
        </div>
    )
}

export default Location;