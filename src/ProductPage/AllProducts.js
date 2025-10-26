// src/ProductPage/AllProducts.js (UPDATED - FIXED PAINTING MAPPING)

// --- DIRECT IMAGE IMPORTS ---

// Digital Art Images
import ATasteOfHoney from '../images/Digital Art/ATasteOfHoney.png';
import ComingHome from '../images/Digital Art/ComingHome.png';
import FeelTheHeat from '../images/Digital Art/FeelTheHeat.png';
import FloralMajesty from '../images/Digital Art/FloralMajesty.png';
import Goddess from '../images/Digital Art/Goddess.png';
import SearchingForPeace from '../images/Digital Art/SearchingForPeace.png';

// Handmade Decor Images
import Anarva from '../images/Handmade Decor/Anarva.png';
import dovy from '../images/Handmade Decor/dovy.png';
import fleurd from '../images/Handmade Decor/fleurd.jpg';
import LupaTerracota from '../images/Handmade Decor/LupaTerracota.png';
import malarpampas from '../images/Handmade Decor/malarpampas.png';
import ort from '../images/Handmade Decor/ort.jpg';

// Sketch Arts Images
import catportrait from '../images/Sketch arts/catportrait.png';
import customportrait3 from '../images/Sketch arts/customportrait3.png';
import customportrait from '../images/Sketch arts/customportrait.png';
import CustomPortrait2 from '../images/Sketch arts/CustomPortrait2.png';
import dogportrait from '../images/Sketch arts/dogportrait.png';
import selfportrait from '../images/Sketch arts/selfportrait.png';

// Painting Images - FIXED MAPPING
import AbstractPaint from '../images/Painting/Abstract Paint by Luinette Belen.jpg';
import OilCanvas from '../images/Painting/Oil Canvas by denCepada.jpg';
import OilOnCanvas from '../images/Painting/Oil_On_Canvas_By_Shan_Arts.jpg';
import PagAkbay from '../images/Painting/Pag Akbay Series VII by Leti watersong.jpg';

// Sculpture Images
import BlossomWood from '../images/Sculpture/blossom-v-wood-sculpture-by-wouter-van-der-vlugt-1-300x200.png';
import FirstConnection from '../images/Sculpture/first-connection-marble-sculpture-by-francesca-bernardini_1.png';
import LaGrandeOurse from '../images/Sculpture/la-grande-ourse-animal-sculpture-by-eric-valat_7-550x769.png';
import PeaceAndLove from '../images/Sculpture/peace-and-love-ii-stainless-steel-sculpture-by-franck-k-1-550x536.png';
import Rosa from '../images/Sculpture/rosa-by-marie-louise-sorbac-300x450.png';
import Stonegate from '../images/Sculpture/stonegate-8-marble-sculpture-by-mattia-bosco-2-300x450.png';

// --- JSON IMPORTS ---
import DigitalArtData from '../json/DigitalArts.json';
import HandmadeDecorData from '../json/HandmadeDecors.json';
import IllustrationSketchData from '../json/IllustrationSketch.json';
import PaintingData from '../json/Painting.json';
import SculptureData from '../json/Sculpture.json';

// --- DATA MAPPING AND CLEANING ---
const ALL_PRODUCTS = [
    ...DigitalArtData,
    ...HandmadeDecorData,
    ...IllustrationSketchData,
    ...PaintingData,
    ...SculptureData,
];

// Map a key to the imported image variable - FIXED PAINTING MAPPING
const IMAGE_MAP = {
    // Digital Art
    "A Taste of Honey": ATasteOfHoney,
    "Coming home": ComingHome,
    "Feel The Heat - Diptych": FeelTheHeat,
    "Floral Majesty 1": FloralMajesty,
    "Goddess 54 ": Goddess,
    "Searching for peace": SearchingForPeace,
    
    // Handmade Decor
    "Anarva": Anarva,
    "Dovy": dovy,
    "Fleur D": fleurd,
    "Lupa Terracota": LupaTerracota,
    "Malar Pampas": malarpampas,
    "Ort Planter": ort,
    
    // Sketch Arts
    "Cat": catportrait,
    "Father & Son": customportrait3,
    "Graphite Pencil Portrait": customportrait,
    "Portrait": CustomPortrait2,
    "Mr. Dog": dogportrait,
    "SelfPortrait": selfportrait,
    
    // Painting - FIXED MAPPING (match exact names from Painting.json)
     "Abstract Paint": AbstractPaint,
    "Oil Canvas": OilCanvas,
    "Oil On Canvas": OilOnCanvas,
    "Pag Akbay Series VII": PagAkbay,
    
    // Sculpture
    "Blossom V Wood Sculpture": BlossomWood,
    "First Connection Marble Sculpture": FirstConnection,
    "La Grande Ourse Animal Sculpture": LaGrandeOurse,
    "Peace and Love II Stainless Steel Sculpture": PeaceAndLove,
    "Rosa": Rosa,
    "Stonegate 8 Marble Sculpture": Stonegate,
};

// Re-assign IDs and replace the string URL with the imported image module
const finalProducts = ALL_PRODUCTS.map((product, index) => ({
    ...product,
    id: index + 1, 
    price: parseFloat(product.price).toFixed(2),
    imageUrl: IMAGE_MAP[product.name.trim()] || '/placeholder/default_image.png'
}));
// In your AllProducts.js, add this debug code before exporting:

// Debug: Check Painting and Sculpture data
console.log('=== DATA COMPARISON DEBUG ===');
console.log('SCULPTURE PRODUCTS:');
finalProducts.filter(p => p.category === "Sculpture").forEach(product => {
  console.log(`- ${product.name} | ID: ${product.id} | Image: ${product.imageUrl ? '✅' : '❌'}`);
});

console.log('PAINTING PRODUCTS:');
finalProducts.filter(p => p.category === "Painting").forEach(product => {
  console.log(`- ${product.name} | ID: ${product.id} | Image: ${product.imageUrl ? '✅' : '❌'}`);
});
console.log('=== END DEBUG ===');


export default finalProducts;