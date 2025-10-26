
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// All imports
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProductDetails from './ProductPage/ProductDetails'; 
import ProductsPage from './ProductPage/ProductsPage';

// Category Specific Pages
import DigitalArt from './ProductPage/DigitalArt'; 
import Handmade from './ProductPage/Handmade';     
import Sketch from './ProductPage/Sketch';        
import Painting from './ProductPage/Painting';      // NEW IMPORT
import Sculpture from './ProductPage/Sculpture';    // NEW IMPORT

function App() {
  // State for Modal Management
  const [selectedProductId, setSelectedProductId] = useState(null);
  const openProductModal = (id) => setSelectedProductId(id);
  const closeProductModal = () => setSelectedProductId(null);

  // Function to pass modal handlers to category pages
  const renderCategoryPage = (Component) => (
    <Component
      onProductClick={openProductModal}
      selectedProductId={selectedProductId}
      closeProductModal={closeProductModal}
    />
  );

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        
        <main className="content">
          <Routes>
            {/* 1. LANDING PAGE: ProductsPage */}
            <Route path="/" element={<ProductsPage />} /> 
            
            {/* 2. ALIAS FOR PRODUCTS PAGE */}
            <Route path="/products" element={<ProductsPage />} /> 

            {/* 3. CATEGORY PAGES */}
            <Route 
                path="/ProductPage/DigitalArt" 
                element={renderCategoryPage(DigitalArt)}
            />
            <Route 
                path="/ProductPage/Handmade" 
                element={renderCategoryPage(Handmade)}
            />
            <Route 
                path="/ProductPage/Sketch" 
                element={renderCategoryPage(Sketch)}
            />
            {/* NEW ROUTES FOR PAINTING AND SCULPTURE */}
            <Route 
                path="/categories/Painting" 
                element={renderCategoryPage(Painting)}
            />
            <Route 
                path="/categories/Sculpture" 
                element={renderCategoryPage(Sculpture)}
            />
          </Routes>
        </main>
        
        {/* MODAL COMPONENT */}
        {selectedProductId !== null && (
          <ProductDetails 
            productId={selectedProductId} 
            onClose={closeProductModal} 
          />
        )}
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;