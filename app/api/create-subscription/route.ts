// API Endpoint for creating a subscription

import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST() {
  let instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const result = await instance.subscriptions.create({
    plan_id: process.env.RAZORPAY_SUBSCRIPTION_PLAN_ID!,
    customer_notify: 1,
    quantity: 1,
    total_count: 1,
    addons: [],
    notes: {
      note_key: "note_value",
    },
  });

  return NextResponse.json(result);
}
