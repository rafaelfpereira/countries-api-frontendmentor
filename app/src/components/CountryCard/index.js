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
      <div className="country-card__country-info">
        <span>Population: </span>
        {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>
      <div className="country-card__country-info">
        <span>Region: </span>
        {region}
      </div>
      <div className="country-card__country-info">
        <span>Capital: </span>
        {capital}
      </div>
    </div>
  </div>
);

export default CountryCard;
