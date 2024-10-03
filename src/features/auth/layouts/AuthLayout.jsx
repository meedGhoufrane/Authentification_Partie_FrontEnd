import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">AlloMedia</h1>
          <nav className="space-x-6">
            <Link to="/auth/login" className="text-gray-700 hover:text-blue-500 transition duration-200">Sign In</Link>
            <Link to="/auth/register" className="text-gray-700 hover:text-blue-500 transition duration-200">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </main>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p> {new Date().getFullYear()} AlloMedia</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
