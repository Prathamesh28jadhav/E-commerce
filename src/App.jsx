import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'; // Importing Tailwind CSS styles
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import LandingPage from './pages/LandingPage';
import PaymentPage from './pages/PaymentPage';
import { CartProvider } from "./components/CartContext";
import ChatbotPage from './pages/ChatbotPage'; 
import ReviewsPage from './pages/ReviewsPage';
const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/home" />} />  {/* Redirect to /home on root */}

        {/* Routes without Navbar */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productpage" element={<ProductPage />} />

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </Router>

    </CartProvider>
  );
};

export default App;
