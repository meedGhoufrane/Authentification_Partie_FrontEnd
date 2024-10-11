import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import axiosInstance from '../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Forgot Password submit clicked with email:", email);
  
    try {
      const response = await axiosInstance.post('/api/auth/forgetpassword', { email });
      console.log("Backend response:", response);
      toast.success("Check your email for the password reset link!");
    } catch (error) {
      console.error("Error in Forgot Password request:", error);
      if (error.response) {
        toast.error(error.response.data?.message || "An error occurred while sending the reset link.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  

  return (
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 shadow-md rounded-lg w-full max-w-md transition">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition"
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
            Send Reset Link
          </button>
        </form>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default ForgotPassword;
