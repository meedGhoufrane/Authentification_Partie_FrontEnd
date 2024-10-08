import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import axiosInstance from '../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../../ThemeContext'; // Import ThemeContext for dark/light mode

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); // Access the current theme

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axiosInstance.post('/api/users', {
        firstName,
        lastName,
        email,
        password,
        adresse,
        phonenumber, 
        role,
      });

      console.log("Registration successful", response.data);
      toast.success("Registration successful! Please verify your email.");
      navigate('/auth/login', { state: { email, verifyMethod: 'otp', showToast: true } });

    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.response) {
        const errorMessage = error.response.data?.message || "An error occurred during registration";
        toast.error(errorMessage);
      } else if (error.request) {
        toast.error("No response from the server. Please try again later.");
      } else {
        toast.error("An error occurred while setting up the request.");
      }
    }
  };

  return (
    <AuthLayout>
        <form onSubmit={handleSubmit} className={`bg-white dark:bg-gray-800 p-8 shadow-md rounded-lg w-full max-w-md transition duration-300`}>
          <h2 className={`text-2xl font-bold mb-4 text-center ext-2xl font-bold text-gray-800 dark:text-gray-200 `}>Register</h2>

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
            required
          />
          <input
            type="text" 
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-600 dark:text-white transition duration-300`}
          >
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </select>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">
            Register
          </button>
        </form>
        <ToastContainer />
    </AuthLayout>
  );
};

export default Register;
