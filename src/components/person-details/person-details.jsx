import React, { useEffect, useState } from 'react';

import './person-details.css';
import Swapi from '../../services/swapi';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwVisual from '../../services/sw-visual';

const PersonDetails = ({ id }) => {
  const [person, setPerson] = useState(null);
  const [image, setImage] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(false);
    Swapi.getPerson(id)
      .then((person) => {
        setPerson(person);
        setImage(SwVisual.getPersonImage(id));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const stub = !person ? (
    <span>Please select person first</span>
  ) : null;
  const spinner = isLoading ? <Spinner /> : null;
  const error = isError ? <ErrorIndicator /> : null;
  const content =
    person && !isLoading && !isError ? (
      <>
        <img className="image" alt={person.name} src={image} />
        <p className="title">{person.name}</p>
        <ul>
          <li>Gender: {person.gender}</li>
          <li>Birth year: {person.birthYear}</li>
          <li>Eye color: {person.eyeColor}</li>
        </ul>
      </>
    ) : null;

  return (
    <div className="content-container">
      {stub}
      {spinner}
      {error}
      {content}
    </div>
  );
};

export default PersonDetails;
