import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req) {
  try {
    const body = await req.json();
    const { priceId } = body;

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "STRIPE_SECRET_KEY est manquante dans Vercel." }, { status: 500 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}/?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Erreur Stripe détaillée:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
