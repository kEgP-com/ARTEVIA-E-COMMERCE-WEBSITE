// src/ProductPage/AllProducts.js (FINALIZED - DIRECT IMAGE IMPORTS)

// --- DIRECT IMAGE IMPORTS ---
// Path: Paakyat ng dalawang level (../../) papunta sa src/images/

// Digital Art Images
import ATasteOfHoney from '../images/Digital Art/ATasteOfHoney.png';
import ComingHome from '../images/Digital Art/ComingHome.png';
import FeelTheHeat from '../images/Digital Art/FeelTheHeat.png';
import FloralMajesty from '../images/Digital Art/FloralMajesty.png';
import Goddess54 from '../images/Digital Art/Goddess54.png';
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

// --- JSON IMPORTS ---
import DigitalArtData from '../json/DigitalArts.json';
import HandmadeDecorData from '../json/HandmadeDecors.json';
import IllustrationSketchData from '../json/IllustrationSketch.json';

// --- DATA MAPPING AND CLEANING ---
const ALL_PRODUCTS = [
    ...DigitalArtData,
    ...HandmadeDecorData,
    ...IllustrationSketchData,
];

// Map a key to the imported image variable
const IMAGE_MAP = {
    "A Taste of Honey": ATasteOfHoney,
    "Coming home": ComingHome,
    "Feel The Heat - Diptych": FeelTheHeat, // Assuming this is the title for FeelTheHeat.png
    "Floral Majesty 1": FloralMajesty,
    "Goddess 54 ": Goddess54,
    "Searching for peace": SearchingForPeace,
    
    "Anarva": Anarva,
    "Dovy": dovy,
    "Fleur D": fleurd,
    "Lupa Terracota": LupaTerracota,
    "Malar Pampas": malarpampas,
    "Ort Planter": ort,
    
    "Cat": catportrait,
    "Father & Son": customportrait3, // Assuming Father & Son is customportrait3.png
    "Graphite Pencil Portrait": customportrait,
    "Portrait": CustomPortrait2, // Assuming Portrait is CustomPortrait2.png
    "Mr. Dog": dogportrait,
    "SelfPortrait": selfportrait,
    
    // NOTE: Kailangan mong i-verify ang exact mapping ng 'name' sa JSON mo 
    // laban sa imported image variable. Ginawa ko ang best guess dito.
};


// Re-assign IDs and replace the string URL with the imported image module
const finalProducts = ALL_PRODUCTS.map((product, index) => ({
    ...product,
    id: index + 1, 
    price: parseFloat(product.price).toFixed(2),
    // Ito ang KASAGUTAN: I-replace ang string URL ng imported image variable
    imageUrl: IMAGE_MAP[product.name.trim()] || '/placeholder/default_image.png' 
}));

export default finalProducts;