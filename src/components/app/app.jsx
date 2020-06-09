import React, { useState } from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import Swapi from '../../services/swapi';

const App = () => {
  const [isRandomPlanet, setIsRandomPlanet] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const onPersonSelected = (id) => {
    setSelectedPerson(id);
  };

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
          <ItemList
            getData={Swapi.getAllPeople}
            onItemSelected={onPersonSelected}
          />
        </div>
        <div className="app-person-data">
          <PersonDetails id={selectedPerson} />
        </div>
        <div className="app-planet-selector">
          <ItemList
            getData={Swapi.getAllPlanets}
            onItemSelected={onPersonSelected}
          />
        </div>
        <div className="app-planet-data">
          <PersonDetails id={selectedPerson} />
        </div>
        <div className="app-starship-selector">
          <ItemList
            getData={Swapi.getAllStarships}
            onItemSelected={onPersonSelected}
          />
        </div>
        <div className="app-starship-data">
          <PersonDetails id={selectedPerson} />
        </div>
      </div>
    </div>
  );
};

export default App;
