import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../../../ThemeContext'; 

const AuthLayout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`fixed top-0 w-full z-10 transition-all duration-300 ease-in-out ${scrolled ? 'bg-gray-800 shadow-lg py-2' : 'bg-white py-4 dark:bg-gray-900'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>AlloMedia</h1>
          <nav className="flex items-center space-x-6">
            <Link to="/auth/login" className={`hover:text-blue-500 transition duration-200 ${scrolled ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>Sign In</Link>
            <Link to="/auth/register" className={`hover:text-blue-500 transition duration-200 ${scrolled ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>Sign Up</Link>
            <button 
              onClick={toggleDarkMode} 
              className={`focus:outline-none hover:text-blue-500 transition duration-200 ${scrolled ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}
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

      <main className="flex-grow bg-gray-100 dark:bg-gray-800 p-6 pt-24">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
