import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const product = await stripe.products.create({
                name: 'sample', // Replace with your product name
                description: 'this is a sample description', // Replace with your product description
            });
            // Create a Price object with the desired amount
            const price = await stripe.prices.create({
                unit_amount: 6000, // Amount in cents (or smallest currency unit)
                currency: 'gbp',   // Currency code (e.g., GBP for British Pound)
                product: product.id, 
            });

            res.status(200).json({ priceId: price.id });
        } catch (error) {
            console.error('Error creating Price:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
