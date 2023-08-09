import React, { useState } from 'react';
import './styles.css';
import { dataArray } from './SquareGridData';

function Card({ id, value, onImageClick }) {
  return (
    <div className="card" onClick={() => onImageClick(id)}>
      <p className="containerCard">{value}</p>
    </div>
  );
}

function SquareGrid({ onImageClick }) {
  const [listItems] = useState(dataArray);

  const renderRow = (startIndex, endIndex) => {
    const rowItems = listItems.slice(startIndex, endIndex);
    return (    
      <div className="row" key={startIndex}>
        {rowItems.map(item => (
          <Card
            key={item.id}
            id={item.id}
            value={item.value}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    );
  };

  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < listItems.length; i += 5) {
      grid.push(renderRow(i, i + 5));
    }
    return grid;
  };

  return (
    <div>
      <div>{renderGrid()}</div>
      <div className="textDescription">
        <p>Click na palavra para ver o sinal em Libras correspondente.</p>
      </div>
    </div>
  );
}

export default SquareGrid;
