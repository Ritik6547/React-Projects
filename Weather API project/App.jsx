import { useEffect, useState } from "react";
import ContentContainer from "./Components/ContentContainer";
import SearchInput from "./Components/SearchInput";

const App = () => {
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = import.meta.env.VITE_WEATHER_TOKEN;

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data || data.cod === "404") {
            console.log("error set");
            setError(true);
            setLoading(false);
            return;
          }
          console.log("data set");
          setWeatherData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Network error: ", err);
          setError(true);
          setLoading(false);
        });
    }
  }, [city]);

  function handleSearch() {
    const trimmedCity = inputCity.trim();
    if (!trimmedCity) return;

    setCity(trimmedCity);
    setWeatherData(null);
    setError(false);
    setLoading(true);
  }

  return (
    <>
      <SearchInput
        inputCity={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        handleSearch={handleSearch}
      />
      <ContentContainer
        weatherData={weatherData}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default App;
