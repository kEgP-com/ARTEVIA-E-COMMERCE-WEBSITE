import React from 'react';
import ProductsData from './AllProducts';

const TestData = () => {
  const paintingProducts = ProductsData.filter(p => p.category === "Painting");
  
  return (
    <div style={{padding: '20px'}}>
      <h2>Painting Products Test</h2>
      <p>Total products: {ProductsData.length}</p>
      <p>Painting products: {paintingProducts.length}</p>
      <ul>
        {paintingProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.category} - {product.imageUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestData;