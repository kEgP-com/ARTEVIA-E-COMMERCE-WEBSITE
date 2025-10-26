// src/ProductPage/ProductCard.js (FINALIZED)

import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ product, onDetailsClick }) => { 
  
    // imageUrl is the imported path from AllProducts.js
    const imageUrl = product.imageUrl || '/placeholder/default_image.png';
    const handleClick = () => { onDetailsClick(product.id); };
    
    // Check kung Category Link ito (kapag ang price ay 0)
    const isCategoryLink = product.price === 0;

    return (
        <div className="product-card">
            <div className="product-card-image-container">
                <img 
                    src={imageUrl} 
                    alt={product.name} 
                    className="product-image-thumbnail"
                />
            </div>
            
            <div className="product-card-info">
                <p className="product-card-name">{product.name}</p>
                <button 
                    className="view-details-button"
                    onClick={handleClick}
                >
                    {/* Kung Category Link, ang name ang button text. Kung Product, "View Details" */}
                    {isCategoryLink ? product.name : 'View Details'} 
                </button>
            </div>
        </div>
    );
};

export default ProductCard;