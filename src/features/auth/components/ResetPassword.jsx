import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from '../layouts/AuthLayout';


const ResetPassword = () => {
  const { token } = useParams(); // Retrieve the token from the URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axiosInstance.post(`/api/auth/resetpassword`, {
        token,
        password,
      });

      toast.success("Password has been reset successfully");
      navigate('/auth/login');
    } catch (error) {
      toast.error("An error occurred while resetting the password");
    }
  };

  return (
    <AuthLayout>
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 shadow-md rounded-lg w-full max-w-md transition">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition"
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
          Reset Password
        </button>
        <ToastContainer />
      </form>
    </div>
    </AuthLayout>
  );
};

export default ResetPassword;
