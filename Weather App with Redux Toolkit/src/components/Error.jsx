import { useSelector } from "react-redux";
import errorImg from "../assets/img/not-found.png";
import { selectWeatherError } from "../store/slices/weatherSlice";

const Error = () => {
  const error = useSelector(selectWeatherError);
  return (
    <div className="home-container">
      <img className="error-img" src={errorImg} />

      <h2>{error}</h2>
      <p>Please Enter Correct City Name</p>
    </div>
  );
};

export default Error;
