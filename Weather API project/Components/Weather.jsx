import clouds from "url:../assets/img/clouds.svg";
import clear from "url:../assets/img/clear.svg";
import rain from "url:../assets/img/rain.svg";
import snow from "url:../assets/img/snow.svg";
import thunderstorm from "url:../assets/img/thunderstorm.svg";
import drizzle from "url:../assets/img/drizzle.svg";
import weather from "url:../assets/img/weather.png";

const Weather = ({ weatherData }) => {
  function getDateDay() {
    const today = new Date();
    const options = { weekday: "short", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  function getStatus(status) {
    const iconMap = {
      clear: clear,
      clouds: clouds,
      rain: rain,
      snow: snow,
      thunderstorm: thunderstorm,
      drizzle: drizzle,
    };
    return iconMap[status.toLowerCase()] || weather;
  }

  return (
    <div className="weather-details">
      <div className="city-date">
        <p className="city">
          <i className=" fa-solid fa-location-dot" /> &nbsp;
          <span className="city-name">{weatherData?.name}</span>
        </p>
        <p className="date">{getDateDay()}</p>
      </div>
      <div className="temperature-container">
        <div className="weather-img">
          <img
            src={getStatus(weatherData.weather[0].main)}
            alt={weatherData.weather[0].main}
          />
        </div>
        <div className="weather-status">
          <p className="temperature">
            {weatherData?.main?.temp} <sup>o</sup>C
          </p>
          <p className="status">{weatherData?.weather[0]?.main}</p>
        </div>
      </div>
      <div className="humidity-wind-container">
        <div className="humidity-container">
          <i className="humid-wind-icon fa-solid fa-droplet" />
          <div className="humidity-box">
            <p className="humidity">Humidity</p>
            <p className="humid-percentage speed-percentage ">
              {weatherData?.main?.humidity}%
            </p>
          </div>
        </div>
        <div className="wind-container">
          <i className="humid-wind-icon fa-solid fa-wind" />
          <div className="wind-box">
            <p className="wind">Wind Speed</p>
            <p className="wind-speed speed-percentage">
              {weatherData?.wind?.speed}M/s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
