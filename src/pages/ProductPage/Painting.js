import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../../css/Category.css";
import paintingData from "../../data/Painting.json";
import ProductCard from "../../components/ProductCard";

function Painting() {
  const [selectedArt, setSelectedArt] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const handleView = (art) => setSelectedArt(art);
  const closeOverlay = () => setSelectedArt(null);

  // ✅ Filter paintings based on search and category
  const filteredPaintings = paintingData.filter((art) => {
    const matchesSearch = art.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || art.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="painting-page">
        <section className="painting-hero">
          <h1>Paintings</h1>

          {/* ✅ Filters */}
          <div className="painting-filters">
            <input
              type="text"
              placeholder="Search paintings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="painting-search-input"
            />
            <select
              className="painting-filter-select"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Oil">Oil</option>
              <option value="Acrylic">Acrylic</option>
              <option value="Watercolor">Watercolor</option>
              <option value="Digital">Digital</option>
            </select>
            <button className="painting-search-btn">Search</button>
          </div>

          {/* ✅ Painting Cards */}
          <div className="discovery-grid">
            {filteredPaintings.length > 0 ? (
              filteredPaintings.map((art) => (
                <ProductCard
                  key={art.id}
                  item={art}
                  categoryFolder="Painting" // ✅ folder in src/images/Painting/
                  onView={handleView}
                  onAddToCart={() => console.log("Added:", art.name)}
                />
              ))
            ) : (
              <p className="no-results">No paintings found.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />

      {/* ✅ Overlay Modal */}
      {selectedArt && (
        <div className="overlay-backdrop" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeOverlay}>
              ×
            </button>
            <img
              src={require(`../../images/Painting/${selectedArt.imageUrl.split("/").pop()}`)}
              alt={selectedArt.name}
              className="overlay-image"
            />
            <h2>{selectedArt.name}</h2>
            <p><strong>{selectedArt.artist}</strong></p>
            <p><em>{selectedArt.category}</em></p>
            <p>{selectedArt.description}</p>
            <h3>₱{selectedArt.price.toLocaleString()}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Painting;
