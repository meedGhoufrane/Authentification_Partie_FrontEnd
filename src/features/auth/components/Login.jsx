import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AuthLayout from '../layouts/AuthLayout'; // Update with the correct path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
    // Handle login logic
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
            Login
          </button>
          <div className="mt-4 text-center">
            <Link to="/auth/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
