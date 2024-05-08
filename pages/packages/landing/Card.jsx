import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';

function Card({handleClose,totalAmount}) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
        return;
    }

    if (!name.trim()) {
      setError("Please enter the cardholder's name.");
      return;
  }

    try {
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: totalAmount, name  }),
        });
        const { clientSecret } = await response.json();

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: name,
                },
            },
        });
        if(result){
          toast.success("Payment Successfull");
          setSuccess(true);
          setLoading(false)
          setName("");
        }

        if (result.error) {
            setPaymentError(result.error.message);
        } else {
            // Payment succeeded
            console.log('Payment succeeded:', result.paymentIntent);
        }
    } catch (error) {
        console.error('Error:', error);
        setPaymentError('An error occurred. Please try again later.');
    }
};


  return (
   <>
    {success ? (
      <div className="text-center py-10 bg-white text-gray-800 px-4 rounded">
      <h1 className="text-3xl font-bold mb-5">Payment Successful</h1>
      <Link href="/" className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Home
      </Link>
    </div>
    ):(
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-20">
      <form  onSubmit={handleSubmit} className="px-6 py-8">
        <button onClick={handleClose} className='text-white bg-blue-500 px-4 rounded'>back</button>
        <div className="text-3xl font-semibold text-gray-800 mb-4">
          Bank Card Details
        </div>
        <div className="mb-4">
          <label htmlFor="cardholderName" className="block text-gray-700 font-semibold mb-2">Cardholder Name</label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-2 text-gray-800 outline-none"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="text-sm text-gray-600 mb-2">Amount Payable</div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4 text-gray-800 outline-none"
          value={"$"+totalAmount}
          readOnly
        />
              <div className="mb-4">
          <label htmlFor="card-element" className="block text-gray-700 font-semibold mb-2">Card Details</label>
          <CardElement
            id="card-element"
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button type='submit' className={loading? "bg-trans": "bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold"}>
          {loading ? (
            <div className='flex'>
              <p>Processing</p>
              <BeatLoader color="#36d7b7" size={10}/>
            </div>
          ) : "Submit Payment"}
        </button>
      </form>
    </div>
    )}
  
    </>
  )
}

export default Card