// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom for navigation

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>  {/* Link to HomePage */}
        </li>
        <li>
          <Link to="/landingPage">Landing</Link>  {/* Link to LandingPage */}
        </li>
        <li>
          <Link to="/login">Login</Link>  {/* Link to LoginPage */}
        </li>
        <li>
          <Link to="/register">Register</Link>  {/* Link to RegisterPage */}
        </li>
        <li>
          <Link to="/cart">Cart</Link>  {/* Link to CartPage */}
        </li>
        <li>
          <Link to="/payment">Payment</Link>  {/* Link to PaymentPage */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
