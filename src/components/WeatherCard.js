import React from "react";

function WeatherCard({ data }) {
  if (!data) return null;

  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <h2>
        {data.name}, {data.sys.country}
      </h2>

      <div className="weather-main">
        <img src={iconUrl} alt={data.weather[0].description} />
        <h1>{Math.round(data.main.temp)}°C</h1>
      </div>

      <p>{data.weather[0].main}</p>
      <p>{data.weather[0].description}</p>

      <div className="extra-info">
        <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
