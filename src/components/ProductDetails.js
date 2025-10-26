import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Products.css';

const sampleProducts = [
  {
    id: 1,
    name: "Digital Landscape",
    price: 2750.00,
    category: "Digital Art",
    description: "A stunning digital landscape created with professional software, featuring vibrant colors and intricate details. This artwork is perfect for modern home or office spaces and comes in high resolution suitable for large format printing.",
    dimensions: "60cm x 90cm Digital Print",
    materials: "Premium Canvas, Archival Inks",
    artist: "Digital Visionary Studio"
  },
  {
    id: 2,
    name: "Abstract Digital",
    price: 3200.00,
    category: "Digital Art",
    description: "Modern abstract digital artwork featuring geometric patterns and bold color combinations. This contemporary piece is perfect for adding a touch of modern elegance to any space.",
    dimensions: "70cm x 100cm",
    materials: "Digital Print on Archival Paper",
    artist: "Abstract Digital Arts"
  },
  {
    id: 3,
    name: "Charcoal Portrait",
    price: 1500.00,
    category: "Sketch Art",
    description: "Elegant charcoal portrait showcasing expert shading techniques and emotional depth. Created on premium art paper, this piece captures the soul and personality of the subject with remarkable precision.",
    dimensions: "30cm x 40cm",
    materials: "Charcoal on Premium Paper",
    artist: "Portrait Masters"
  },
  {
    id: 4,
    name: "Pencil Sketch",
    price: 1200.00,
    category: "Sketch Art",
    description: "Detailed pencil sketch with artistic interpretation. Perfect for capturing special moments and loved ones with precision and attention to detail.",
    dimensions: "25cm x 35cm",
    materials: "Graphite on Sketch Paper",
    artist: "Sketch Art Studio"
  },
  {
    id: 5,
    name: "Handmade Ceramic Vase",
    price: 2750.00,
    category: "Homemade Decor",
    description: "Beautiful handmade ceramic vase with unique glaze patterns, perfect for home decoration. Each piece is individually crafted, making it a unique addition to any interior design scheme.",
    dimensions: "25cm x 30cm x 15cm",
    materials: "Ceramic, Unique Glaze",
    artist: "Ceramic Arts"
  },
  {
    id: 6,
    name: "Wooden Decoration",
    price: 1890.00,
    category: "Homemade Decor",
    description: "Exquisitely carved wooden home decoration. Handcrafted by skilled artisans, this piece showcases natural wood grains and elegant design.",
    dimensions: "20cm x 25cm x 10cm",
    materials: "Solid Wood",
    artist: "Woodcraft Masters"
  },
  {
    id: 7,
    name: "Oil Painting - Sunset",
    price: 4200.00,
    category: "Painting",
    description: "Traditional oil painting capturing the beautiful colors of a sunset over the mountains. Created with high-quality oil paints on canvas, this piece will bring warmth and beauty to any room.",
    dimensions: "80cm x 120cm",
    materials: "Oil on Canvas",
    artist: "Traditional Painters"
  },
  {
    id: 8,
    name: "Abstract Painting",
    price: 3800.00,
    category: "Painting",
    description: "Vibrant abstract painting exploring color theory and emotional expression through bold brushstrokes and dynamic composition.",
    dimensions: "90cm x 90cm",
    materials: "Acrylic on Canvas",
    artist: "Abstract Expressionists"
  },
  {
    id: 9,
    name: "Marble Sculpture",
    price: 5500.00,
    category: "Sculpture",
    description: "Classical marble sculpture showcasing expert craftsmanship. Carved from premium marble, this timeless piece adds sophistication to any collection.",
    dimensions: "50cm x 80cm x 30cm",
    materials: "Carrara Marble",
    artist: "Sculpture Masters"
  },
  {
    id: 10,
    name: "Wood Sculpture",
    price: 3300.00,
    category: "Sculpture",
    description: "Elegant wood sculpture inspired by natural forms. Hand-carved from sustainable wood, this piece represents organic beauty and expert craftsmanship.",
    dimensions: "40cm x 60cm x 25cm",
    materials: "Sustainable Wood",
    artist: "Natural Sculptors"
  }
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = sampleProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="product-details-container">Product not found</div>;
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} ${product.name}(s)`);
  };

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate('/products')}>
        ← Back to Products
      </button>
      
      <div className="product-details">
        <div className="product-details-image">
          <div className="image-placeholder-large">
            {product.name.charAt(0)}
          </div>
        </div>
        
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <div className="product-details-price">₱{product.price.toLocaleString()}</div>
          <div className="product-details-category">{product.category}</div>
          <p className="product-details-description">{product.description}</p>
          
          <div className="product-specs">
            <p><strong>Dimensions:</strong> {product.dimensions}</p>
            <p><strong>Materials:</strong> {product.materials}</p>
            <p><strong>Artist:</strong> {product.artist}</p>
          </div>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <select 
              id="quantity"
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <div className="action-buttons">
            <button className="add-to-cart-large" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;