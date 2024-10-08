import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from '../layouts/AuthLayout';
import axiosInstance from '../../../api/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showToast) {
      toast.info("Please verify your email using the OTP sent to your email address.");
    }
  }, [location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(`/api/auth/login`, {
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Login successful!");
        localStorage.setItem('token', response.data.token); 
        navigate('/'); 
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);

     
      if (error.response) {
        const errorMessage = error.response.data?.message || "Login failed. Please try again.";
        toast.error(errorMessage);
      } else if (error.request) {
        toast.error("No response from the server. Please check your network connection.");
      } else {
        toast.error("An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </AuthLayout>
  );
};

export default Login;
