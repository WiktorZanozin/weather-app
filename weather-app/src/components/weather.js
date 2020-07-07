import React from "react";

const Weather =(props)=>(
        <div className="weather__info">
                <p className="weather__key">Location: <span className="weather__value">{props.city} {props.country}</span></p>
                <p className="weather__key">Temperature:<span className="weather__value">{props.temperature}</span> </p>
                 <p className="weather__key">Humidity:<span className="weather__value">{props.humidity}</span></p>
                <p className="weather__key">Condition:<span className="weather__value">{props.description}</span></p>
                 <p className="weather__key">{props.error}</p>
        </div>
);
export default Weather;