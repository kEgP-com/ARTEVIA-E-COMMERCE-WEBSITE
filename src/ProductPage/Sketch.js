// src/ProductPage/Sketch.js

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductsData from './AllProducts'; 
import ProductDetails from './ProductDetails'; 
import '../css/Digital.css'; // Gamit ang shared CSS file for categories

const SKETCH_CATEGORY = "Illustration & Sketch"; 

const Sketch = ({ onProductClick, selectedProductId, closeProductModal }) => { 
  
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        // I-filter ang products gamit ang "Illustration & Sketch"
        const filtered = ProductsData.filter(
            product => product.category.toLowerCase() === SKETCH_CATEGORY.toLowerCase()
        );
        
        const finalFiltered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setCategoryProducts(finalFiltered);
        
    }, [searchTerm]);

    return (
        <div className="category-page-container">
            <div className="category-title-wrapper">
                <button className="category-title-button">{SKETCH_CATEGORY}</button>
            </div>

            <div className="product-grid-category">
                {categoryProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onDetailsClick={onProductClick} // Bubuksan ang modal
                    />
                ))}
                {/* Blank placeholders */}
                {Array(6 - (categoryProducts.length % 6)).fill(0).map((_, index) => (
                    <div key={`blank-${index}`} className="product-card-blank-frame"></div>
                ))}
            </div>
            
            <div className="wave-placeholder-category"></div>
            
        </div>
    );
};

export default Sketch;