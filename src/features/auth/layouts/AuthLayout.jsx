// src/features/auth/layouts/AuthLayout.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../../../ThemeContext'; 

const AuthLayout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext); 

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">AlloMedia</h1>
          <nav className="flex items-center space-x-6">
            <Link to="/auth/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-200">Sign In</Link>
            <Link to="/auth/register" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-200">Sign Up</Link>
            <button 
              onClick={toggleDarkMode} 
              className="focus:outline-none text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-200"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 dark:bg-gray-800 p-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default AuthLayout;
