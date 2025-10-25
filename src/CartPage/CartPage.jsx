import React, { useState } from 'react';
import { 
  MapPin, 
  Trash2, 
  Send, 
  Apple, // Using Apple for Apple Pay
  DollarSign, // Using for Cash on Delivery
  CreditCard, // Using for PayPal (as a generic payment icon)
  Sparkles, // Added for Gemini feature
  Loader2 // Added for loading state
} from 'lucide-react';

// --- Mock Data ---
// You will replace this with data from your CartContext
const mockCartItems = [
  {
    id: 1,
    artist: 'Artist Name 1',
    title: 'Artwork Title One',
    image: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Image',
  },
  {
    id: 2,
    artist: 'Artist Name 2',
    title: 'Artwork Title Two',
    image: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Image',
  },
  {
    id: 3,
    artist: 'Artist Name 3',
    title: 'Artwork Title Three',
    image: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Image',
  },
  {
    id: 4,
    artist: 'Artist Name 4',
    title: 'Artwork Title Four',
    image: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Image',
  },
];

// Mock order details
const orderDetails = {
  address: 'User - Blk. 13, Lt. 5, Phase 2, Mabuhay, Cabuyao Laguna',
  recipientName: 'Carl M. Rodriguez',
  artist: 'Alex J, Javier & Maria S. Sanica',
  type: 'Painting',
  totalItems: 4,
  shippingFee: 5.00,
  voucher: -2.00,
};
// --- End Mock Data ---

// --- Gemini API Helper Function ---
// Added a fetch function with exponential backoff for API calls
async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response.json();
      
      // Retry on 429 (Too Many Requests) or 5xx server errors
      if (response.status === 429 || response.status >= 500) {
        // console.warn(`Retrying API call... (${i + 1}/${retries})`);
        await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
      } else {
        // Don't retry on other client errors (e.g., 400, 404)
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      // console.error("Fetch error:", error.message);
      if (i === retries - 1) throw error; // Throw after last retry
      await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
    }
  }
}
// --- End Gemini API Helper ---


// Main Cart Page Component
export default function CartPage() {
  // You would get cartItems and functions from useCart()
  const [items, setItems] = useState(mockCartItems);
  const [selectedPayment, setSelectedPayment] = useState('paypal');

  // --- Gemini Feature State ---
  const [message, setMessage] = useState(''); // State for the message text
  const [isLoading, setIsLoading] = useState(false); // Loading state for API call
  // --- End Gemini Feature State ---

  // Calculate totals - you'll get this from your context
  const subtotal = items.length * 100; // Example calculation
  const total = subtotal + orderDetails.shippingFee + orderDetails.voucher;

  // This function would come from your CartContext
  const handleRemoveItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // --- Gemini API Call Function ---
  const handleSuggestMessage = async () => {
    setIsLoading(true);
    setMessage(''); // Clear previous message

    const apiKey = ""; // Leave as-is, will be populated at runtime
    const apiUrl = `https://generativelightlanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const systemPrompt = "You are a helpful assistant for an online art store. You write polite, friendly, and concise messages (2-3 sentences) from the customer to the art vendor.";
    
    // Create a list of item titles from the cart
    const itemTitles = items.map(item => `"${item.title}"`).join(', ');
    
    const userQuery = `I am buying these art pieces: ${itemTitles}. Please write a short, polite message to the vendor. Mention I'm excited to receive them and ask for them to be packaged carefully.`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      generationConfig: {
        temperature: 0.7,
        topP: 1.0,
      }
    };

    try {
      const result = await fetchWithRetry(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (generatedText) {
        setMessage(generatedText); // Set the textarea with the generated message
      } else {
        setMessage("Sorry, I couldn't generate a message right now.");
      }

    } catch (error) {
      // console.error("Error generating message:", error);
      setMessage("Error: Could not connect to the suggestion service.");
    } finally {
      setIsLoading(false);
    }
  };
  // --- End Gemini API Call Function ---

  const PaymentMethod = ({ id, icon, name }) => (
    <button
      onClick={() => setSelectedPayment(id)}
      className={`flex items-center space-x-2 border rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
        selectedPayment === id
          ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50'
          : 'border-gray-300 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span>{name}</span>
    </button>
  );

  return (
    <div 
      className="font-sans min-h-screen" 
      style={{ 
        fontFamily: 'Inter, sans-serif',
        // Added background styling to match your design
        backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/uploads/seigaiha.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      <div className="p-4 md:p-8"> {/* Removed bg-gray-50 and added padding here */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Cart Items */}
          {/* Added bg-white/90 and backdrop-blur-sm for the semi-transparent look */}
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Your Cart ({items.length})</h2>
            
            {/* Scrollable Cart List */}
            <div className="max-h-[600px] overflow-y-auto divide-y divide-gray-200 pr-2">
              {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-20 h-20 rounded-md object-cover bg-gray-200"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Error'; }}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.artist}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Right Column: Order Summary */}
          {/* These cards remain bg-white (opaque) as in the design */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 border-b pb-2">Address</h3>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{orderDetails.address}</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">Payment Methods</h3>
              <div className="flex flex-wrap gap-3">
                <PaymentMethod 
                  id="paypal"
                  icon={<CreditCard size={20} className="text-blue-600" />}
                  name="PayPal"
                />
                <PaymentMethod 
                  id="applepay"
                  icon={<Apple size={20} className="text-black" />}
                  name="Apple Pay"
                />
                <PaymentMethod 
                  id="cod"
                  icon={<DollarSign size={20} className="text-green-600" />}
                  name="Cash On Delivery"
                />
              </div>
            </div>

            {/* Message Vendor */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">Message Vendor</h3>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4" // Increased rows for generated message
                placeholder="Click 'Suggest Message' or type your own..."
                value={message} // Bind to state
                onChange={(e) => setMessage(e.target.value)} // Allow user editing
              ></textarea>
              
              {/* --- Gemini API Button --- */}
              <button 
                onClick={handleSuggestMessage}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mt-3 w-full transition-colors disabled:opacity-60"
              >
                {isLoading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Sparkles size={18} />
                )}
                <span>{isLoading ? 'Generating...' : '✨ Suggest Message'}</span>
              </button>
              {/* --- End Gemini API Button --- */}

              <button className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg mt-2 w-full transition-colors">
                <Send size={16} />
                <span>Submit</span>
              </button>
            </div>

            {/* Order Details & Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-2 text-sm text-gray-700 mb-4 pb-4 border-b">
                <p><span className="font-semibold">Recipient Name:</span> {orderDetails.recipientName}</p>
                <p><span className="font-semibold">Artist:</span> {orderDetails.artist}</p>
                <p><span className="font-semibold">Type:</span> {orderDetails.type}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Items:</span>
                  <span className="font-medium text-gray-800">{orderDetails.totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping fee:</span>
                  <span className="font-medium text-gray-800">${orderDetails.shippingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Voucher:</span>
                  <span className="font-medium text-red-500">${orderDetails.voucher.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>

              <div className="flex flex-col space-y-3">
                <button 
                  className="w-full bg-yellow-800 hover:bg-yellow-900 text-white font-bold py-3 rounded-lg transition-colors"
                  style={{ backgroundColor: '#8a6e4b' }} // Matching the brown button from your design
                >
                  PURCHASE
                </button>
                <button 
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition-colors"
                  style={{ backgroundColor: '#5a5a5a' }} // Matching the gray button
                >
                  CANCEL
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

