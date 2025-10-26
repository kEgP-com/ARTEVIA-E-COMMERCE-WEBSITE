import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductsData from './AllProducts';
import '../css/Digital.css';

const HANDMADE_CATEGORY = "Handmade Decor";

const Handmade = ({ onProductClick, selectedProductId, closeProductModal }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const filtered = ProductsData.filter(
      product => product.category.toLowerCase() === HANDMADE_CATEGORY.toLowerCase()
    );
    
    const finalFiltered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCategoryProducts(finalFiltered);
  }, [searchTerm]);

  const handleBackToCategories = () => {
    navigate('/');
  };

  return (
    <div className="category-page-container">
      {/* Only Category Title - No CATEGORIES header or search bar */}
      <div className="category-header">
        <div className="category-title-wrapper">
          <button className="category-title-button">{HANDMADE_CATEGORY}</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid-category">
        {categoryProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onDetailsClick={onProductClick}
          />
        ))}
        {/* Blank placeholders */}
        {Array(6 - (categoryProducts.length % 6)).fill(0).map((_, index) => (
          <div key={`blank-${index}`} className="product-card-blank-frame"></div>
        ))}
      </div>

      {/* Back to Categories Button - Lower Left */}
      <div className="back-to-categories-container">
        <button 
          className="back-to-categories-btn"
          onClick={handleBackToCategories}
        >
          ← Back to Categories
        </button>
      </div>
      
      <div className="wave-placeholder-category"></div>
    </div>
  );
};

export default Handmade;