import React from 'react'

function Card({handleClose}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div className="px-6 py-8">
      <button onClick={handleClose} className='text-white bg-blue-500 px-4 rounded'>back</button>
      <div className="text-3xl font-semibold text-gray-800 mb-4">
        Bank Card Details
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4 max-[768px]:flex-col">
          <span className="text-sm text-gray-600">
            Card Number
          </span>
          <input
            type='number'
            className="text-lg font-semibold text-gray-800 outline-none rounded"
            placeholder='**** **** **** 1234'
          />
        </div>
        <div className="flex justify-between items-center max-[768px]:flex-col gap-3">
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              Cardholder Name
            </span>
            <input
              type="text"
              className="text-lg font-semibold text-gray-800 outline-none rounded"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              Expiration Date
            </span>
            <input
              type="text"
              className="text-lg font-semibold text-gray-800 outline-none rounded"
              placeholder="12/24"
            />
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">CVV</div>
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4 text-gray-800 outline-none"
        placeholder="123"
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">
        Submit Payment
      </button>
    </div>
  </div>
  
  )
}

export default Card