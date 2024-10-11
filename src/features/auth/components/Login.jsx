import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import axiosInstance from '../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../../ThemeContext'; // Import ThemeContext for dark/light mode

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // Access the current theme

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/auth/login', { email, password });
      toast.success("Login successful!");
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage = error.response?.data?.message || "An error occurred during login";
      toast.error(errorMessage);
    }
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 shadow-md rounded-lg w-full max-w-md transition">
          <h2
            className="text-2xl font-bold mb-4 text-center"
            style={{ color: theme === 'dark' ? 'white' : 'black' }} // Inline style to confirm color change
          >
            Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition"
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
            Login
          </button>
          <div className="mt-4 text-center">
            <a href="/auth/forgot-password" className={`text-blue-500 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`}>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Login;
