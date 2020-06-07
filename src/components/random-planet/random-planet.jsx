import React, { useEffect, useState } from 'react';
import Swapi from '../../services/swapi';
import SwVisual from '../../services/sw-visual';

import styles from './random-planet.module.css';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import PlanetView from './parts/planet-view';

const RandomPlanet = () => {
  const [planet, setPlanet] = useState();
  const [image, setImage] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(updatePlanet, 15000);
    updatePlanet();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const onPlanetLoaded = (loadedPlanet) => {
    setPlanet(loadedPlanet);
    setImage(SwVisual.getPlanetImage(loadedPlanet.id));
    setLoading(false);
  };

  const onLoadError = (err) => {
    console.log(err);
    setError(true);
    setLoading(false);
  };

  const updatePlanet = () => {
    setLoading(true);
    setError(false);
    const id = Math.floor(Math.random() * 17) + 2;
    Swapi.getPlanet(id).then(onPlanetLoaded).catch(onLoadError);
  };

  const spinner = isLoading ? (
    <div className={styles.indicator}>
      <Spinner />
    </div>
  ) : null;

  const error = isError ? (
    <div className={styles.indicator}>
      <ErrorIndicator className={styles.indicator} />
    </div>
  ) : null;

  const planetView =
    !isLoading && !isError ? (
      <PlanetView planet={planet} image={image} />
    ) : null;

  return (
    <div className={styles.contentContainer}>
      {spinner}
      {error}
      {planetView}
    </div>
  );
};

export default RandomPlanet;
