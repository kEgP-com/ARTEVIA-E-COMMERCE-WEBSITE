import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../css/ProductsPage.css';

// Import actual category images
import DigitalArtImage from '../images/Digital Art/FloralMajesty.png';
import SketchImage from '../images/Sketch arts/customportrait.png';
import HandmadeImage from '../images/Handmade Decor/Anarva.png';
import PaintingImage from '../images/Painting/Abstract Paint by Luinette Belen.jpg';
import SculptureImage from '../images/Sculpture/first-connection-marble-sculpture-by-francesca-bernardini_1.png';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { 
      name: "Digital Art", 
      path: "/ProductPage/DigitalArt",
      image: DigitalArtImage
    },
    { 
      name: "Illustration & Sketch", 
      path: "/ProductPage/Sketch",
      image: SketchImage
    },
    { 
      name: "Handmade Decor", 
      path: "/ProductPage/Handmade",
      image: HandmadeImage
    },
    { 
      name: "Painting", 
      path: "/categories/Painting",
      image: PaintingImage
    },
    { 
      name: "Sculpture", 
      path: "/categories/Sculpture",
      image: SculptureImage
    },
  ];
  
  const categoryProducts = categories.map((cat, index) => ({
    id: index + 100,
    name: cat.name,
    category: cat.name,
    price: 0,
    description: "",
    imageUrl: cat.image, // Use actual imported images
    path: cat.path
  }));
  
  const handleCategoryClick = (productId) => {
    const selectedCategory = categoryProducts.find(p => p.id === productId);
    if (selectedCategory) {
      navigate(selectedCategory.path);
    }
  };

  return (
    <div className="products-page-container">
      <div className="products-header">
        {/* CATEGORIES Title just above the search bar */}
        <h1 className="categories-main-title">CATEGORIES</h1>
        <p className="categories-subtitle">Explore our curated art collections</p>
        
        {/* Search Section with extra-wide search bar */}
        <div className="search-section">
          <div className="search-bar-container-extra-wide">
            <input
              type="text"
              placeholder="Search Art Categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-extra-wide"
            />
            <button className="search-button-extra-wide">Search</button>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="category-grid">
        {categoryProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onDetailsClick={handleCategoryClick}
          />
        ))}
      </div>
      
      {/* Keep the wave background */}
      <div className="wave-placeholder-products-page"></div>
    </div>
  );
};

export default ProductsPage;