import React from 'react';
import '../css/ProductCard.css';

const ProductCard = ({ product, onDetailsClick }) => { 
  
    const imageUrl = product.imageUrl || '/placeholder/default_image.png';
    const handleClick = () => { onDetailsClick(product.id); };
    
    // Check if it's a Category Link (when price is 0)
    const isCategoryLink = product.price === 0;

    // Fix corrupted product names - hardcode correct names for painting products
    const getCorrectProductName = (product) => {
      const name = product.name || '';
      
      // Fix specific painting product names
      if (product.category === "Painting") {
        switch(product.id) {
          case 1: return "Abstract Paint";
          case 2: return "Oil Canvas";
          case 3: return "Oil On Canvas";
          case 4: return "Pag Akbay Series VII";
          default: return name;
        }
      }
      
      return name;
    };

    const displayName = getCorrectProductName(product);

    return (
        <div className="product-card">
            <div className="product-card-image-container">
                <img 
                    src={imageUrl} 
                    alt={displayName} 
                    className="product-image-thumbnail"
                    onError={(e) => {
                      e.target.src = '/placeholder/default_image.png';
                    }}
                />
            </div>
            
            <div className="product-card-info">
                
                <button 
                    className="view-details-button"
                    onClick={handleClick}
                >
                    {isCategoryLink ? displayName : 'View Details'} 
                </button>
            </div>
        </div>
    );
};

export default ProductCard;