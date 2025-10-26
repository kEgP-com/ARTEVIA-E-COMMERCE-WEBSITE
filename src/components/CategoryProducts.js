import React, { useState } from 'react';
import './Products.css';

// Complete product data with correct image paths
const productData = {
  'PAINTINGS': [
    { 
      id: 13, 
      name: 'Abstract Paint by Lunette Belen', 
      price: 'P 3,200.00', 
      category: 'PAINTINGS',
      artist: 'Lunette Belen',
      description: 'Abstract painting',
      size: '',
      image: '../images/Painting/Abstract Paint by Lunette Belen.jpg'
    },
    { 
      id: 14, 
      name: 'Oil Canvas by denCepada', 
      price: 'P 4,500.00', 
      category: 'PAINTINGS',
      artist: 'denCepada',
      description: 'Oil on canvas',
      size: '',
      image: '/images/Painting/Oil Canvas by denCepada.jpg'
    },
    { 
      id: 15, 
      name: 'Oil On Canvas By Shan Arts', 
      price: 'P 3,800.00', 
      category: 'PAINTINGS',
      artist: 'Shan Arts',
      description: 'Oil on canvas',
      size: '',
      image: '/images/Painting/Oil_On_Canvas_By_Shan_Arts.jpg'
    },
    { 
      id: 16, 
      name: 'Pag Akbay Series VII by Leti Watersong', 
      price: 'P 5,200.00', 
      category: 'PAINTINGS',
      artist: 'Leti Watersong',
      description: 'Pag Akbay Series VII',
      size: '',
      image: '/images/Painting/Pag Akbay Series VII by Leti watersong.jpg'
    }
  ],
  'SCULPTURE': [
    { 
      id: 17, 
      name: 'First Connection', 
      price: '$4,436.77', 
      category: 'SCULPTURE',
      artist: 'Francesca Bernardini',
      description: 'Marble sculpture',
      size: '',
      image: '/images/Sculpture/first-connection-marble-sculpture-by-francesca-bernardini_1.png'
    },
    { 
      id: 18, 
      name: 'The Great Bear', 
      price: '$14,010.82', 
      category: 'SCULPTURE',
      artist: 'Eric Valat',
      description: 'Animal sculpture',
      size: '',
      image: '/images/Sculpture/la-grande-ourse-animal-sculpture-by-eric-valat_7-550x769.png'
    },
    { 
      id: 19, 
      name: 'Peace and Love II', 
      price: '$34,093.01', 
      category: 'SCULPTURE',
      artist: 'Franck K',
      description: 'Stainless steel sculpture',
      size: '',
      image: '/images/Sculpture/peace-and-love-li-stainless-steel-sculpture-by-franck-k-1-550x536.png'
    },
    { 
      id: 20, 
      name: 'Blossom V', 
      price: '$5,954.60', 
      category: 'SCULPTURE',
      artist: 'Wouter van der Vlugt',
      description: 'Wood sculpture',
      size: '',
      image: '/images/Sculpture/blossom-v-wood-sculpture-by-wouter-van-der-vlugt-1-300x200.png'
    },
    { 
      id: 21, 
      name: 'Rosa', 
      price: '$14,711.36', 
      category: 'SCULPTURE',
      artist: 'Marie Louise Sorbac',
      description: 'Sculpture',
      size: '',
      image: '/images/Sculpture/rosa-by-marie-louise-sorbac-300x450.png'
    },
    { 
      id: 22, 
      name: 'Stonegate 8', 
      price: '$9,223.80', 
      category: 'SCULPTURE',
      artist: 'Mattia Bosco',
      description: 'Marble sculpture',
      size: '',
      image: '/images/Sculpture/stonegate-8-marble-sculpture-by-mattia-bosco-2-300x450.png'
    }
  ],
  'DIGITAL ART': [
    { 
      id: 1, 
      name: 'Coming home', 
      price: '$430', 
      category: 'DIGITAL ART',
      artist: 'Fikry Botros',
      description: 'Digital on Paper',
      size: '',
      image: '/images/Digital Art/Coming home.png'
    },
    { 
      id: 2, 
      name: 'Feel The Heat', 
      price: '$1,268', 
      category: 'DIGITAL ART',
      artist: 'Lynne Godina-orme',
      description: 'Digital - Diptych',
      size: '',
      image: '/images/Digital Art/Feel The Heat.png'
    },
    { 
      id: 3, 
      name: 'goddess 54', 
      price: '$5,290', 
      category: 'DIGITAL ART',
      artist: 'Jason Lincoln Jeffers',
      description: 'Digital on metal',
      size: '52.0 inch x 32.0 inch',
      image: '/images/Digital Art/goddess 54.png'
    },
    { 
      id: 4, 
      name: 'A Taste of Honey', 
      price: '$7,700', 
      category: 'DIGITAL ART',
      artist: 'Christian Løgstrup',
      description: 'Digital on paper',
      size: '27.5 inch x 27.5 inch',
      image: '/images/Digital Art/A_Taste_of_Honey.png'
    },
    { 
      id: 5, 
      name: 'Searching for peace', 
      price: '$1,750', 
      category: 'DIGITAL ART',
      artist: 'Esteban Vera',
      description: 'Digital on paper',
      size: '43.3 inch x 35.4 inch',
      image: '/images/Digital Art/Searching for peace.png'
    },
    { 
      id: 6, 
      name: 'Floral Majesty', 
      price: '$495', 
      category: 'DIGITAL ART',
      artist: 'Michael Filonow',
      description: 'Digital on Paper',
      size: '30.0 inch x 24.0 inch',
      image: '/images/Digital Art/Floral Majesty.png'
    }
  ],
  'SKETCH ART': [
    { 
      id: 23, 
      name: 'Cat Portrait', 
      price: 'PHP 2,826.09', 
      category: 'SKETCH ART',
      artist: 'hansana',
      description: 'Charcoal Cat Portrait, Custom Portrait of Cat, Custom charcoal pet, Portrait of Cat, Drawing of Cat',
      size: '',
      image: '/images/Sketch arts/cat portrait.png'
    },
    { 
      id: 24, 
      name: 'Custom Portrait 1', 
      price: 'PHP 6,375.00', 
      category: 'SKETCH ART',
      artist: 'yourstruly',
      description: 'Custom pet portraits dressed in suits',
      size: '',
      image: '/images/Sketch arts/custom portrait.png'
    },
    { 
      id: 25, 
      name: 'Custom Portrait 2', 
      price: 'PHP 3,853.33', 
      category: 'SKETCH ART',
      artist: 'AStDaya',
      description: 'Graphite Pencil Portrait, Drawing portrait from photo, Custom hand drawn portrait, Unique gift idea',
      size: '',
      image: '/images/Sketch arts/Custom_Portrait_2.png'
    },
    { 
      id: 26, 
      name: 'Custom Portrait 3', 
      price: 'PHP 1,212.12', 
      category: 'SKETCH ART',
      artist: 'ART2YOUcreation',
      description: 'Commission portrait pencil portrait pencil custom portrait drawing couple portrait family portrait',
      size: '',
      image: '/images/Sketch arts/custom portrait -3.png'
    },
    { 
      id: 27, 
      name: 'Dog Portrait', 
      price: 'PHP 2,826.09', 
      category: 'SKETCH ART',
      artist: 'MichaelJArts',
      description: 'Custom Portrait - 3',
      size: '',
      image: '/images/Sketch arts/dog portrait.png'
    },
    { 
      id: 28, 
      name: 'Self Portrait', 
      price: 'PHP 2,826.09', 
      category: 'SKETCH ART',
      artist: 'MichaelJArts',
      description: 'SelfPortrait',
      size: '',
      image: '/images/Sketch arts/self portrait.png'
    }
  ],
  'HOMEMADE DECOR': [
    { 
      id: 7, 
      name: 'Anarva - Ecomix Elephant', 
      price: 'P 2,750.00', 
      category: 'HOMEMADE DECOR',
      artist: '',
      description: 'Fabric & Wood Small Elephant Decor',
      size: '',
      image: '/images/Handmade Decor/Anarva - Ecomix Elephant With Fabric & Wood Small P 2.750.00.png'
    },
    { 
      id: 8, 
      name: 'Dovy Oak Wood Decorative Bird', 
      price: 'P 2,890.00', 
      category: 'HOMEMADE DECOR',
      artist: 'Woodlands',
      description: 'Oak wood decorative bird',
      size: '',
      image: '/images/Handmade Decor/dovy_oak_wood_decorative_bird_by_Woodlands_P 2.890.00.png'
    },
    { 
      id: 9, 
      name: 'Fleur D Or Candle Stand', 
      price: 'P 1,090.00', 
      category: 'HOMEMADE DECOR',
      artist: 'Ceramic Stigipq',
      description: 'Large candle stand',
      size: '',
      image: '/images/Handmade Decor/fleur d or candle stand large P 1.090.00 by Ceramic Sit.jpg'
    },
    { 
      id: 10, 
      name: 'Lupa Terracota Round Lantern', 
      price: 'P 590.00', 
      category: 'HOMEMADE DECOR',
      artist: 'Saritgas',
      description: 'Round lantern with metal holder',
      size: '',
      image: '/images/Handmade Decor/lupa terracota round lantern with metal holder P 590.00 by Saritgas.png'
    },
    { 
      id: 11, 
      name: 'Malar Pampas & Sorghum Stem Bundle', 
      price: 'P 1,290.00', 
      category: 'HOMEMADE DECOR',
      artist: 'Sardigas',
      description: 'Pampas & sorghum stem bundle',
      size: '',
      image: '/images/Handmade Decor/malar pampas & sorghum stem bundle 1.290.00 by Saridgas.png'
    },
    { 
      id: 12, 
      name: 'Ort Ceramic Planter', 
      price: 'P 2,050.00', 
      category: 'HOMEMADE DECOR',
      artist: 'Paganini Arts',
      description: 'Ceramic planter',
      size: '',
      image: '/images/Handmade Decor/ort ceramic planter P 2.050.00 by Paganini Arts.jpg'
    }
  ]
};

function CategoryProducts({ category, onBack, onProductSelect }) {
  const products = productData[category] || [];
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    // You can add more cart logic here
  };

  return (
    <div className="category-products-container">
     <div className="category-header-with-cart">
  <h1>{category}</h1>
  <div className="cart-icon">
    <span className="cart-symbol">🛒</span>
    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
  </div>
</div>

      <div className="products-grid-complete">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onProductSelect={onProductSelect}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <div className="back-button-left">
        <button onClick={onBack} className="back-btn-left">Back to Categories</button>
      </div>
    </div>
  );
}

function ProductCard({ product, onProductSelect, onAddToCart }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-card-complete">
      <div className="product-image-complete">
        {!imageError ? (
          <img 
            src={product.image} 
            alt={product.name}
            onError={handleImageError}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div className="image-fallback">
            {product.name}
          </div>
        )}
      </div>
      <div className="product-info-complete">
        <h3 className="product-name-complete">{product.name}</h3>
        {product.artist && <p className="product-artist-complete">by {product.artist}</p>}
        <p className="product-description-complete">{product.description}</p>
        {product.size && <p className="product-size-complete">{product.size}</p>}
        <p className="product-price-complete">{product.price}</p>
        <div className="product-actions-complete">
          <button 
            className="add-to-cart-btn-complete"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;