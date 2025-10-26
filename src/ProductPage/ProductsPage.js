// src/ProductPage/ProductsPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard'; 
import ProductsData from './AllProducts'; 
import '../css/ProductsPage.css'; // Corrected CSS Path

const ProductsPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Hardcoded Listahan ng Categories base sa design at data mo
    const categories = [
        { name: "Digital Art", path: "/ProductPage/DigitalArt" },
        { name: "Illustration & Sketch", path: "/ProductPage/Sketch" },
        { name: "Handmade Decor", path: "/ProductPage/Handmade" },
        { name: "Painting", path: "/categories/Painting" },
        { name: "Sculpture", path: "/categories/Sculpture" },
    ];
    
    // Simulate data structure para mag-fit sa ProductCard (gamit price: 0 para sa Category)
    const categoryProducts = categories.map((cat, index) => ({
        id: index + 100, 
        name: cat.name,
        category: cat.name,
        price: 0, // Key identifier na Category Link ito
        description: "",
        imageUrl: "/placeholder/category_frame.png", 
        path: cat.path
    }));
    
    // Click Handler para sa Category Navigation
    const handleCategoryClick = (productId) => {
        const selectedCategory = categoryProducts.find(p => p.id === productId);
        if (selectedCategory) {
            navigate(selectedCategory.path);
        }
    };

    return (
        <div className="products-page-container">
            <h1 className="page-title-products">CATEGORIES</h1>
            
            <div className="search-bar-container-v2">
                <span className="filter-icon"></span>
                <input
                    type="text"
                    placeholder="Search Art"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input-v2"
                />
                <button className="search-button-v2">Search</button>
                <span className="cart-icon"></span>
            </div>

            <div className="category-grid">
                {categoryProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        // Ito ang mag-trigger ng handleCategoryClick para mag-navigate
                        onDetailsClick={handleCategoryClick} 
                    />
                ))}
            </div>
            
            <div className="wave-placeholder-products-page"></div>
        </div>
    );
};

export default ProductsPage;