import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Products from './components/Products';
import CategoryProducts from './components/CategoryProducts';
import ProductDetails from './components/ProductDetails';
import './ProductApp.css';

function ProductApp() {
  const [currentView, setCurrentView] = useState('categories');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    setSelectedCategory('');
  };

  const handleBackToCategory = () => {
    setCurrentView('category');
    setSelectedProduct(null);
  };

  return (
    <div className="product-app">
      <Navbar />
      
      <main className="main-content">
        {currentView === 'categories' && (
          <Products 
            onCategorySelect={handleCategorySelect}
            onProductSelect={handleProductSelect}
          />
        )}
        
        {currentView === 'category' && (
          <CategoryProducts 
            category={selectedCategory}
            onBack={handleBackToCategories}
            onProductSelect={handleProductSelect}
          />
        )}
        
        {currentView === 'product' && (
          <ProductDetails 
            product={selectedProduct}
            onBack={handleBackToCategory}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default ProductApp;