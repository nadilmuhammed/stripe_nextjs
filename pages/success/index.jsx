import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-5">Payment Successful</h1>
      {/* <p className="text-lg">Thank you for your purchase!</p> */}
      {/* <p className="text-lg">Your order has been successfully processed.</p> */}
      {/* <p className="text-lg">We will send you a confirmation email shortly.</p> */}
      <Link href="/" className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Continue Shopping
      </Link>
    </div>
  );
};

export default SuccessPage;
