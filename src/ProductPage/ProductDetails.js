// src/ProductPage/ProductDetails.js (FINALIZED - Single File Solution)

import React, { useState } from 'react';
import ProductsData from './AllProducts'; 
import '../css/ProductDetails.css'; 
import '../css/MiniModal.css'; // Kakailanganin pa rin natin ang CSS para sa Mini-Modal

// --- Mini-Modal Form Component (Ipinasok na sa loob ng ProductDetails.js) ---
const MiniModalForm = ({ title, placeholder, onSubmit, onClose }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim()) {
            onSubmit(inputValue);
            onClose();
        } else {
            alert('Please enter your ' + title.toLowerCase().split(':')[0] + ' before submitting.');
        }
    };

    return (
        // Mini-Modal Overlay (DAPAT MAS MATAAS ANG Z-INDEX KAYSA SA .modal-overlay)
        <div className="mini-modal-overlay" onClick={onClose}> 
            <div className="mini-modal-content" onClick={e => e.stopPropagation()}>
                
                <h2 className="modal-title">{title}</h2>
                
                <textarea
                    className="modal-textbox"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    rows="6"
                ></textarea>
                
                <div className="modal-buttons">
                    <button className="modal-submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                    <button className="modal-cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Main ProductDetails Component ---

const ProductDetails = ({ productId, onClose }) => { 
  
    // State para sa mini-modals: 'message', 'feedback', o null
    const [activeMiniModal, setActiveMiniModal] = useState(null);

    const product = ProductsData.find(p => p.id == productId);

    if (!product) { return null; }

    const formatPrice = (price) => { return `₱${price}`; };

    // Handler for Submitting Forms
    const handleSubmission = (type, message) => {
        alert(`[${type}] Submission Success! Content: "${message}"`);
    };

    return (
        // Main Product Details Overlay
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                
                {/* Close Button (Top-Right) */}
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                
                {/* Product Info Content */}
                <div className="product-details-content">
                    {/* ... (Image and Info remains the same) ... */}
                    <div className="product-image-large">
                        <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    
                    <div className="product-info">
                        <h1>{product.name}</h1>
                        <p className="product-artist">
                            **{product.artist}**
                        </p>
                        <p className="product-category">Category: {product.category}</p>
                        <p className="product-price">{formatPrice(product.price)}</p>
                        <hr/>
                        <p className="product-description">
                            **Details:** {product.description}
                        </p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                </div>
                
                {/* BOTTOM ACTION BUTTONS */}
                <div className="modal-bottom-actions">
                    
                    {/* 1. Message Seller Button */}
                    <button 
                        className="action-button message-seller-button"
                        onClick={() => setActiveMiniModal('message')} // OPEN MESSAGE MODAL
                    >
                        💬 Message Seller
                    </button>
                    
                    {/* 2. Feedback Button */}
                    <button 
                        className="action-button feedback-button"
                        onClick={() => setActiveMiniModal('feedback')} // OPEN FEEDBACK MODAL
                    >
                        ⭐ Give Feedback
                    </button>
                    
                    {/* 3. Close Button */}
                    <button 
                        className="action-button close-modal-button"
                        onClick={onClose} 
                    >
                        Close
                    </button>
                </div>

                {/* --- MINI-MODAL RENDERING LOGIC --- */}
                {activeMiniModal === 'message' && (
                    <MiniModalForm
                        title={`Message Seller: ${product.artist}`}
                        placeholder="Type your question or inquiry here..."
                        onSubmit={(msg) => handleSubmission('Message', msg)}
                        onClose={() => setActiveMiniModal(null)}
                    />
                )}
                
                {activeMiniModal === 'feedback' && (
                    <MiniModalForm
                        title={`Give Feedback for ${product.name}`}
                        placeholder="Share your thoughts and rating here..."
                        onSubmit={(msg) => handleSubmission('Feedback', msg)}
                        onClose={() => setActiveMiniModal(null)}
                    />
                )}

            </div>
        </div>
    );
};

export default ProductDetails;