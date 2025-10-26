// src/App.js (FINAL VERSION - Walang Homepage)

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lahat ng imports ay mananatili, kasama ang 'HomePage' import kung sakali
// na ito ay ginagamit pa sa ibang lugar, ngunit hindi ito gagamitin sa Routes.
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProductDetails from './ProductPage/ProductDetails'; 
import ProductsPage from './ProductPage/ProductsPage'; // THE MAIN LANDING PAGE

// Category Specific Pages
import DigitalArt from './ProductPage/DigitalArt'; 
import Handmade from './ProductPage/Handmade';     
import Sketch from './ProductPage/Sketch';        

// ... (Kung may iba pang imports) ...


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
            {/* 1. LANDING PAGE: ProductsPage ang gagamitin sa root path (/) */}
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