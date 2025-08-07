import errorImg from "url:../assets/img/not-found.png";

const Error = () => {
  return (
    <div className="home-container">
      <img className="error-img" src={errorImg} />

      <h2>City Not Found</h2>
      <p>Please Enter Correct City Name</p>
    </div>
  );
};

export default Error;
