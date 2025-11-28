import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = "962a348112787611a5b2d3509d10dddf";

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setErrorMsg("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      const json = await res.json();

      if (json.cod !== 200) {
        setErrorMsg(json.message);
        setWeather(null);
      } else {
        setWeather(json);
      }
    } catch (err) {
      setErrorMsg("Error fetching weather.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      <h1>Weather App</h1>

      <SearchBar
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onSearch={() => fetchWeather(city)}
      />

      {loading && <p>Loading...</p>}
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
