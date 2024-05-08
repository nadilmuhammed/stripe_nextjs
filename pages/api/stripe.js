// pages/api/create-payment-intent.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { amount, name } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100, // Convert amount to cents
                currency: 'usd', // Change currency as required
                description: 'Your transaction description here',
                shipping: {
                  name: name,
                  address: {
                      line1: "27 Fredrick Ave",
                      postal_code: "97712",
                      city: "Brothers",
                      state: "OR",
                      country: "US",
                  },
              },
            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error('Error creating PaymentIntent:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
