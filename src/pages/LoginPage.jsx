import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Get stored credentials from local storage (set during registration)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Reset error and success messages
    setError('');
    setSuccess('');

    // Validate login credentials
    if (username === storedUsername && password === storedPassword) {
        setTimeout(() => {
            navigate('/productpage'); // Redirect to ProductPage after success
          }, 2000);
          
      
    } else {
      setError('Login failed. Incorrect username or password.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-6">
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

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center">{success}</p>}

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-800">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
