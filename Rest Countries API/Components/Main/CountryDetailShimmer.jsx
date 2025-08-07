import "./CountryDetailShimmer.css";
function CountryDetailShimmer() {
  return (
    <div className="country-details">
      <div className="country-img shimmer-img radius"></div>
      <div className="details-content-container shimmer-content radius">
        <h1 className="shimmer-name radius"></h1>
        <div className="details-text">
          <div className="shimmer-left-container radius"></div>
          <div className="shimmer-right-container radius"></div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailShimmer;
