import React from 'react';
import './styles.css';
import { dataArray } from './SquareGridData';

function ImagePage({ selectedImageId, onBackButtonClick }) {
  const selectedImage = dataArray.find(item => item.id === selectedImageId);

  if (!selectedImage) {
    return <div>Imagem não encontrada</div>;
  }

  return (
    <div className="pageDescription">     
      <img
        src={process.env.PUBLIC_URL + '/assets/' + selectedImage.imageLink}
        alt="Imagem"
        style={{ maxWidth: '500px', maxHeight: '500px' }}
      />
      <button className="backButton" onClick={onBackButtonClick}>
        Voltar
      </button>
    </div>
  );
}

export default ImagePage;

