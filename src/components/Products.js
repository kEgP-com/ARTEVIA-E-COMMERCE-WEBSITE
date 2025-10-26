import React, { useState } from 'react';
import './Products.css';

function Products({ onCategorySelect, onProductSelect }) {
  const categories = [
    { 
      name: 'PAINTINGS', 
      count: 4,
      image: '../images/Painting/Oil_On_Canvas_By_Shan_Arts.jpg'
    },
    { 
      name: 'SCULPTURE', 
      count: 6,
      image: '/images/Sculpture/la-grande-ourse-animal-sculpture-by-eric-valat_7-550x769.png'
    },
    { 
      name: 'DIGITAL ART', 
      count: 6,
      image: '../images/Digital Art/A_Taste_of_Honey.png'
    },
    { 
      name: 'SKETCH ART', 
      count: 6,
      image: '/images/Sketcharts/Custom_Portrait_2.png'
    },
    { 
      name: 'HOMEMADE DECOR', 
      count: 6,
      image: '/images/HandmadeDecor/dovy_oak_wood_decorative_bird_by_Woodlands_P 2.890.00.png'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>CATEGORIES</h1>
        <div className="search-section">
          <div className="search-bar-container-extra-wide">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              className="search-input-extra-wide"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="categories-grid-2x3">
        {filteredCategories.map((category, index) => (
          <CategoryCard 
            key={category.name}
            category={category}
            onCategorySelect={onCategorySelect}
            index={index}
          />
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="no-categories">
          <p>No categories found matching your search.</p>
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category, onCategorySelect, index }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getFallbackColor = (index) => {
    const colors = [
      'linear-gradient(135deg, #B7A087, #8A7259)',
      'linear-gradient(135deg, #8A7259, #674831)',
      'linear-gradient(135deg, #674831, #372414)',
      'linear-gradient(135deg, #372414, #8A7259)',
      'linear-gradient(135deg, #8A7259, #B7A087)'
    ];
    return colors[index % colors.length];
  };

  return (
    <div 
      className="category-card-2x3"
      onClick={() => onCategorySelect(category.name)}
      style={{ 
        background: imageError ? getFallbackColor(index) : `url("${category.image}") center/cover no-repeat`
      }}
    >
      <div className="category-overlay-2x3"></div>
      <div className="category-content-2x3">
        <h3 className="category-name-2x3">{category.name}</h3>
        <p className="product-count-2x3">{category.count} products</p>
      </div>
      {/* Hidden img for error detection */}
      <img 
        src={category.image} 
        alt=""
        style={{ display: 'none' }}
        onError={handleImageError}
      />
    </div>
  );
}

export default Products;