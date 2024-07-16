"use client";

import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { db } from "@/utils/db";
import { userSubscriptions } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/contexts/UserSubscriptionContext";

export default function UpgradePage() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { isUserSubscribed } = useContext(UserSubscriptionContext);

  //function to create subscription via api call to endpoint /api/create-subscription
  const createSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        onPayment(resp.data.id);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
  };

  //function to load razorpay script and open payment modal
  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  //function to open razorpay payment modal and handle payment response
  const onPayment = async (subId: string) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      subscription_id: subId,
      name: "ContentWizard",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          saveSubscriptionToDB(resp.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    try {
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      console.log("Try Again...", e);
      setLoading(false);
    }
  };

  const saveSubscriptionToDB = async (paymentId: string) => {
    const result = await db.insert(userSubscriptions).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName || user?.primaryEmailAddress?.emailAddress,
      isActive: true,
      paymentID: paymentId,
      joinDate: moment().format("DD/MM/YYYY"),
    });

    console.log(result);

    if (result) {
      window.location.reload();
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-center font-bold text-3xl my-3">
          Upgrade With a Monthly Plan
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Free
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  ₹0{" "}
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 10,000 Words/Month </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 50+ Templates Access</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">
                  {" "}
                  Unlimited Download & Copy{" "}
                </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 1 Month of History </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Monthly
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  ₹399{" "}
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 1,00,000 Words/Month </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 50+ Templates Access </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">
                  {" "}
                  Unlimited Download & Copy{" "}
                </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 1 Year of History </span>
              </li>
            </ul>

            <Button
              disabled={loading || isUserSubscribed}
              onClick={createSubscription}
              className={`w-full rounded-full mt-5 p-6 flex gap-2 items-center hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:text-white
                ${isUserSubscribed && "bg-primary text-white"}
                `}
              variant="outline"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {isUserSubscribed ? "Current Plan" : "Upgrade Now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
