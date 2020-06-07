import React from 'react';

import './error-indicator.css';
import deathStarImg from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={deathStarImg} alt="death star icon" />
      <span className="boom">BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>(but we already sent drones to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
