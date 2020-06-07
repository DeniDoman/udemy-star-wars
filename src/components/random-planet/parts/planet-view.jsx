import React from 'react';

const PlanetView = ({
  planet: { name, population, rotationPeriod, diameter },
  image,
}) => {
  return (
    <>
      <img className="image" alt="random planet image" src={image} />
      <p className="title">{name}</p>
      <ul className="data">
        <li>Population: {population}</li>
        <li>Rotation period: {rotationPeriod}</li>
        <li>Diameter: {diameter}</li>
      </ul>
    </>
  );
};

export default PlanetView;
