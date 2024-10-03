import React from 'react';
import AuthLayout from '../features/auth/layouts/AuthLayout'; // Update with the correct path

const HomePage = () => {
  return (
    <AuthLayout>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to the HomePage</h1>
      </div>
    </AuthLayout>
  );
};

export default HomePage;
