import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductsData from './AllProducts';
import '../css/Digital.css';

const PAINTING_CATEGORY = "Painting";

const Painting = ({ onProductClick, selectedProductId, closeProductModal }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    console.log('All Products Data:', ProductsData); // Debug
    
    const filtered = ProductsData.filter(
      product => product.category && product.category.toLowerCase() === PAINTING_CATEGORY.toLowerCase()
    );
    
    console.log('Filtered Painting Products:', filtered); // Debug
    
    const finalFiltered = filtered.filter(product =>
      product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log('Final Painting Products:', finalFiltered); // Debug
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
          <button className="category-title-button">{PAINTING_CATEGORY}</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid-category">
        {categoryProducts.length > 0 ? (
          categoryProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onDetailsClick={onProductClick}
            />
          ))
        ) : (
          <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '40px'}}>
            <p>No products found in Painting category.</p>
            <p>Check console for debugging information.</p>
          </div>
        )}
        {/* Blank placeholders - only show if we have products */}
        {categoryProducts.length > 0 && 
          Array(6 - (categoryProducts.length % 6)).fill(0).map((_, index) => (
            <div key={`blank-${index}`} className="product-card-blank-frame"></div>
          ))
        }
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

export default Painting;