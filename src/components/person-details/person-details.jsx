import React from 'react';

import './person-details.css';

const PersonDetails = () => {
  return (
    <div className="content-container">
      <img
        className="image"
        alt="person"
        src="https://via.placeholder.com/150"
      />
      <p className="title">R2-D2</p>
      <ul>
        <li>Gender: n/a</li>
        <li>Birth year: 33BBY</li>
        <li>Eye color: red</li>
      </ul>
    </div>
  );
};

export default PersonDetails;
