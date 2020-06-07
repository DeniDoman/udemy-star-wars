import React, { useState } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

const App = () => {
  const [isRandomPlanet, setIsRandomPlanet] = useState(true);

  return (
    <div>
      <Header />
      <div className="app-content">
        <div className="app-random">
          {isRandomPlanet && <RandomPlanet />}
        </div>
        <div className="app-random-toggle">
          <input
            type="button"
            value="Toggle Random Planet"
            onClick={() => setIsRandomPlanet(!isRandomPlanet)}
          />
        </div>
        <div className="app-person-selector">
          <ItemList />
        </div>
        <div className="app-person-data">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
