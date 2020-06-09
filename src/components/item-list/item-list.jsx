import React, { useEffect, useState } from 'react';

import './item-list.css';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const ItemList = ({ getData, onItemSelected }) => {
  const [itemsList, setItemsList] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getData()
      .then((list) => {
        setItemsList(list);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [getData]);

  const onItemSelect = (id) => {
    setSelectedItem(id);
    onItemSelected(id);
  };

  const spinner = isLoading ? <Spinner /> : null;
  const error = isError ? <ErrorIndicator /> : null;
  const content =
    !isLoading && !isError ? (
      <>
        {itemsList &&
          itemsList.map(({ id, name }) => (
            <input
              key={id}
              className={`item-button ${
                selectedItem === id ? 'item-button-selected' : ''
              }`}
              type="button"
              value={name}
              onClick={() => onItemSelect(id)}
            />
          ))}
      </>
    ) : null;

  return (
    <>
      <div className="items-container">
        {spinner}
        {error}
        {content}
      </div>
    </>
  );
};

export default ItemList;
