import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
// import countriesData from "../../data";

function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,region,population,flags,name,nativeName,subregion,tld,currencies,borders"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  // console.log(countriesData);

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  flag={country.flags.svg}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
}

export default CountriesList;
