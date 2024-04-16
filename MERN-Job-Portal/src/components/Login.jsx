import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = (email, password);
      // Save token to localStorage
      localStorage.setItem('token', token);
      // Redirect to dashboard or protected route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center max-h-fit py-[133px] bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-10">
        <h2 className="text-3xl text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <Link to="/signup" className="text-blue-500 text-sm hover:underline">Sign Up</Link>
          </div>
        </form>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
