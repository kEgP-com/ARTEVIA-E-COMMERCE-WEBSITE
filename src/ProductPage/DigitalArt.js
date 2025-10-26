// src/ProductPage/DigitalArt.js (Template for all Category Pages)

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductsData from './AllProducts'; 
import ProductDetails from './ProductDetails'; 
import '../css/Digital.css'; // Corrected CSS Path (assuming this is your category CSS file)

const DIGITAL_ART_CATEGORY = "Digital Art"; 

// Tumatanggap na lang ng onProductClick, selectedProductId, at closeProductModal
const DigitalArt = ({ onProductClick, selectedProductId, closeProductModal }) => { 
  
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        // ... (Filtering logic remains the same) ...
        const filtered = ProductsData.filter(
            product => product.category.toLowerCase() === DIGITAL_ART_CATEGORY.toLowerCase()
        );
        
        const finalFiltered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setCategoryProducts(finalFiltered);
        
    }, [searchTerm]);

    return (
        <div className="category-page-container">
            {/* ... (Title button remains the same) ... */}
            
            <div className="product-grid-category">
                {categoryProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        // Ang onProductClick ay bubuksan ang modal (via App.js)
                        onDetailsClick={onProductClick}
                    />
                ))}
                {/* ... (Blank placeholders) ... */}
            </div>
            
            <div className="wave-placeholder-category"></div>

            {/* Modal is rendered in App.js. No need to render it here, 
               but I'll keep the logic simple as we defined earlier: 
               The App.js already renders the ProductDetails based on selectedProductId.
            */}
            
        </div>
    );
};

export default DigitalArt;