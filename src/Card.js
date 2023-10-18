import React from 'react';

function Card({ id, value, onImageClick }) {
  return (
    <div
      className="card"
      onClick={() => onImageClick(id)}
    >
      <p className="containerCard">{value}</p>
    </div>
  );
}

export default Card;