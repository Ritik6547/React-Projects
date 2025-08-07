import { useEffect, useState } from "react";

import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router";
import CountryDetailShimmer from "./CountryDetailShimmer";

import { useTheme } from "../../hooks/useTheme.js";

function CountryDetail() {
  const [isDark] = useTheme();
  const params = useParams();
  const { state } = useLocation();

  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital.join(", "),
      tld: data.tld.join(", "),
      currencies: Object.values(data.currencies)
        .map((currency) => {
          return currency.name;
        })
        .join(", "),
      languages: Object.values(data.languages).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            return borderCountry.name.common;
          });
      })
    ).then((borders) => {
      setCountryData((prevState) => ({ ...prevState, borders }));
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
        console.log(err);
      });
  }, [countryName]);

  if (notFound) {
    return <h1>Country Not Found</h1>;
  }

  return (
    <>
      {countryData === null ? (
        <CountryDetailShimmer />
      ) : (
        <main className={isDark ? "dark" : ""}>
          <div className="main-container">
            <span
              onClick={() => history.back()}
              className="back-arrow back-btn">
              <i className="fa-solid fa-arrow-left" />
              &nbsp;&nbsp;Back
            </span>

            <div className="country-details">
              <div className="country-img">
                <img
                  className="country-flag"
                  src={countryData.flag}
                  alt={countryData.name + " Flag"}
                />
              </div>
              <div className="details-content-container">
                <h1 className="country-name">{countryData.name}</h1>
                <div className="details-text">
                  <div className="left-details">
                    <p>
                      <b>Native Name: {countryData.nativeName}</b>
                      <span className="native-name" />
                    </p>
                    <p>
                      <b>
                        Population:{" "}
                        {countryData.population.toLocaleString("en-In")}
                      </b>
                      <span className="population" />
                    </p>
                    <p>
                      <b>Region: {countryData.region}</b>
                      <span className="region" />
                    </p>
                    <p>
                      <b>Sub Region: {countryData.subRegion}</b>
                      <span className="sub-region" />
                    </p>
                    <p>
                      <b>Capital: {countryData.capital}</b>
                      <span className="capital" />
                    </p>
                  </div>
                  <div className="right-details">
                    <p>
                      <b>Top Level Domain: {countryData.tld}</b>
                      <span className="tld" />
                    </p>
                    <p>
                      <b>Currencies: {countryData.currencies}</b>
                      <span className="currencies" />
                    </p>
                    <p>
                      <b>Languages: {countryData.languages}</b>
                      <span className="languages" />
                    </p>
                  </div>
                </div>
                {countryData.borders.length !== 0 && (
                  <div className="border-countries">
                    <p>Border Countries:</p>
                    <div className="border-countries-link">
                      {countryData.borders.map((border) => {
                        return (
                          <Link
                            to={`/${border}`}
                            className="back-arrow"
                            key={Math.random()}>
                            {border}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default CountryDetail;
