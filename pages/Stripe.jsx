'use client'


import React, { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";

function Stripe() {

const [paymentError,setPaymentError] = useState(null)
    
const handleClick = async () => {
    try {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  
      const { error } = await stripe?.redirectToCheckout({
        lineItems: [{ price: "price_1PBahDSEX8loY6rLD4fy6LL0", quantity: 1 }],
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/cancel",
        customerEmail: "tester@gmail.com",
        clientReferenceId: "cus_Q1eRGeJdEyuR9E",
        billingAddressCollection:"required"
      }) ?? {};
      if (error) {
        setPaymentError(error.message);
      }
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
      setPaymentError("An error occurred. Please try again later.");
    }
  };


  return (
    <div className='text-center py-[5rem]'>
        <h1 className='text-xl font-bold'>
            Stripe checkout
        </h1>
        {paymentError && <p>Error: {paymentError}</p>}
        <button onClick={handleClick} className='p-2 border border-1 border-gray-500 mt-5 bg-green-400 rounded'>CHECK OUT</button>
    </div>
  )
}

export default Stripe