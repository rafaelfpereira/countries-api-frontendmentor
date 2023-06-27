import React from "react";
import "./styles.scss";

const CountryCard = ({ name, population, region, capital, flagUrl }) => (
  <div className="country-card">
    <img
      alt={`The flag of ${name}.`}
      src={flagUrl}
      className="country-card__flag"
    />
    <div className="country-card__data-container">
      <h4 className="country-card__country-name">{name}</h4>
      <span className="country-card__country-info">
        Population: {population}
      </span>
      <span className="country-card__country-info">
        Region: {region}
      </span>
      <span className="country-card__country-info">
        Capital: {capital}
      </span>
    </div>
  </div>
);

export default CountryCard;
