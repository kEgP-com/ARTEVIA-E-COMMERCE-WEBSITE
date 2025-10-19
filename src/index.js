import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  CartPage  from '.src/CartPage/CartPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartPage />
  </React.StrictMode>
);

export default CartPage;