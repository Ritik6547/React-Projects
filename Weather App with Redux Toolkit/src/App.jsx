import { useEffect, useState } from "react";
import ContentContainer from "./components/ContentContainer";
import SearchInput from "./components/SearchInput";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "./store/slices/weatherSlice";

const App = () => {
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!city) return;
    dispatch(fetchWeatherData(city));
  }, [city]);

  function handleSearch() {
    const trimmedCity = inputCity.trim();
    if (!trimmedCity) return;

    setCity(trimmedCity);
    setInputCity("");
  }

  return (
    <>
      <SearchInput
        inputCity={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        handleSearch={handleSearch}
      />
      <ContentContainer />
    </>
  );
};

export default App;
