import Error from "./Error";
import Home from "./Home";
import Weather from "./Weather";

const ContentContainer = ({ error, weatherData, loading }) => {
  return (
    <div className="card-details">
      {loading && <p className="loading-text">Loading...</p>}

      {!loading && !weatherData && !error && <Home />}

      {!loading && error && <Error />}

      {!loading && weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};

export default ContentContainer;
