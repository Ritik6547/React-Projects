import { Link } from "react-router";

function CountryCard({ flag, name, population, region, capital, data }) {
  return (
    <Link to={`./${name}`} className="country-card" state={data}>
      <img src={flag} alt={name + " Flag"} />
      <div className="card-content">
        <h3 className="country-name">{name}</h3>
        <p className="country-card-details">
          <b>Population: </b>
          {population.toLocaleString("en-In")}
        </p>
        <p className="country-card-details">
          <b>Region: </b>
          {region}
        </p>
        <p className="country-card-details">
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
