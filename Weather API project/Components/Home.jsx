import searchCity from "url:../assets/img/searchCity.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={searchCity} alt="search-city" />
      <h2>Search City</h2>
      <p>Find out the weather conditions of the city</p>
    </div>
  );
};

export default Home;
