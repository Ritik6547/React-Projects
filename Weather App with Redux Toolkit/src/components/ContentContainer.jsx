import { useSelector } from "react-redux";
import Error from "./Error";
import Home from "./Home";
import Weather from "./Weather";
import {
  selectWeatherData,
  selectWeatherError,
  selectWeatherLoading,
} from "../store/slices/weatherSlice";

const ContentContainer = () => {
  const weatherData = useSelector(selectWeatherData);
  const loading = useSelector(selectWeatherLoading);
  const error = useSelector(selectWeatherError);

  return (
    <div className="card-details">
      {loading && <p className="loading-text">Loading...</p>}

      {!loading && !weatherData && !error && <Home />}

      {!loading && error && <Error />}

      {!loading && weatherData && <Weather />}
    </div>
  );
};

export default ContentContainer;
