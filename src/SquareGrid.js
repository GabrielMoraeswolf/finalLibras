import React, { useState, useEffect } from 'react';
import './styles.css';
import { dataArray } from './SquareGridData';
import Card from './Card'; 

function SquareGrid({ onImageClick }) {
  const [listItems] = useState(dataArray);
  const [columns, setColumns] = useState(4); // Padrão: 4 colunas

  useEffect(() => {
    // Verifica a largura da tela e ajusta o número de colunas
    if (window.innerWidth <= 700) {
      setColumns(2); 
    } else {
      setColumns(4); // Mais de 700px de largura: 4 colunas
    }
  }, []);

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
            columns={columns}
          />
        ))}
      </div>
    );
  };

  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < listItems.length; i += columns) {
      grid.push(renderRow(i, i + columns));
    }
    return grid;
  };

  return (
    <div>
      <div>{renderGrid()}</div>
      <div className="textDescription">
        <p>Clique na palavra/frase para ver o sinal em Libras correspondente.</p>
      </div>
    </div>
  );
}

export default SquareGrid;
