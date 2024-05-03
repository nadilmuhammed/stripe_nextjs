import Link from 'next/link';
import React from 'react';

const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-800 mb-4">{errorMessage}</p>
        <Link href="/"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Reload Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
