import React, { useState } from 'react';
import './styles.css';
import SquareGrid from './SquareGrid';
import ImagePage from './ImagePage';

function App() {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImageId(id);
  };

  const handleBackButtonClick = () => {
    setSelectedImageId(null);
  };

  return (
    <div>
      <div className="container">
        <h1 className="title"> Geociências em Libras:</h1>
        <div className="app">
          {selectedImageId === null ? (
            <SquareGrid onImageClick={handleImageClick} />          
          ) : (
            <ImagePage
              selectedImageId={selectedImageId}
              onBackButtonClick={handleBackButtonClick}
            />
          )}
        </div>
      </div>
      <footer>By: Gabriel Moraes</footer>
    </div>
  );
}

export default App;
