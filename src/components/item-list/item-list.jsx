import React from 'react';

import './item-list.css';

const ItemList = () => {
  return (
    <>
      <div className="items-container">
        <input
          className="item-button"
          type="button"
          value="Luke Skywalker"
        />
        <input className="item-button" type="button" value="C-3PO" />
        <input className="item-button" type="button" value="R2-D2" />
        <input
          className="item-button"
          type="button"
          value="Darth Vader"
        />
      </div>
    </>
  );
};

export default ItemList;
