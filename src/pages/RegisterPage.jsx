import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Save the credentials to local storage (you can use a backend in a real scenario)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setMessage('Registered successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login'); // Navigate to login page after 2-3 seconds
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Register
            </button>
          </div>
        </form>
        {message && <p className="text-green-600 text-sm text-center">{message}</p>}
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
