import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../../css/Category.css";
import Sketch from "../../data/IllustrationSketch.json";
import ProductCard from "../../components/ProductCard";

// ✅ Preload all images in src/images and its subfolders
const images = require.context("../../images", true);

function IllustrationSketch() {
  const [selectedArt, setSelectedArt] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const handleView = (art) => setSelectedArt(art);
  const closeOverlay = () => setSelectedArt(null);

  // ✅ Helper: resolve image safely
  const getImagePath = (path) => {
    try {
      const cleanPath = path.replace(/^(\.\.\/)+images\//, "");
      return images(`./${cleanPath}`);
    } catch (err) {
      console.warn("Image not found:", path);
      return "";
    }
  };

  // ✅ Apply search + filter
  const filteredSketches = Sketch.filter((art) => {
    const matchesSearch = art.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || art.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="sculpture-page">
        <section className="sculpture-hero">
          <h1>Illustrations & Sketch</h1>

          {/* 🔍 Filters */}
          <div className="sculpture-filters">
            <input
              type="text"
              placeholder="Search artworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sculpture-search-input"
            />
            <select
              className="sculpture-filter-select"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Sketch">Sketch</option>
              <option value="Illustration">Illustration</option>
              <option value="Concept Art">Concept Art</option>
            </select>
          </div>

          {/* 🖼️ Product Grid */}
          <div className="discovery-grid">
            {filteredSketches.length > 0 ? (
              filteredSketches.map((art) => (
                <ProductCard
                  key={art.id}
                  item={art}
                  onView={handleView}
                />
              ))
            ) : (
              <p className="no-results">No artworks found.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />

      {/* 🔍 Overlay View */}
      {selectedArt && (
        <div className="overlay-backdrop" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeOverlay}>×</button>

            <img
              src={getImagePath(selectedArt.imageUrl)}
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

export default IllustrationSketch;
