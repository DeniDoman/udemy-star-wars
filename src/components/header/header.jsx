import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="menu-container">
      <p className="menu-title">StarDB-2</p>
      <a className="menu-item" href="/people">
        People
      </a>
      <a className="menu-item" href="/planets">
        Planets
      </a>
      <a className="menu-item" href="/starships">
        Starships
      </a>
    </div>
  );
};

export default Header;
