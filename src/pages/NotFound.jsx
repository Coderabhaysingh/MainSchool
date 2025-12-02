import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-[#f1992d] text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
