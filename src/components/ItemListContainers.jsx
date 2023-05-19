import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0'
  };

  return (
    <div className="item-list-container" style={containerStyle}>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;