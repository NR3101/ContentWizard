"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AIOutput, userSubscriptions } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { HISTORY } from "@/app/dashboard/history/page";
import { TotalUsageContext } from "@/contexts/TotalUsageContext";
import { UserSubscriptionContext } from "@/contexts/UserSubscriptionContext";
import Link from "next/link";

const UsageTrack = () => {
  const [maxUsage, setMaxUsage] = useState(10000);
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { isUserSubscribed, setIsUserSubscribed } = useContext(
    UserSubscriptionContext
  );
  const { user } = useUser();

  //useEffect to get data and check if user is subscribed when user is available
  useEffect(() => {
    if (user) {
      getData();
      isCurrentUserSubscribed();
    }
  }, [user]);

  //Function to get data from the database and calculate total usage
  const getData = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (!email) return;

      const result = (await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, email))) as HISTORY[];

      getTotalUsage(result);
    } catch (error) {
      console.error("Failed to get data", error);
    }
  };

  //Function to calculate total usage from the data fetched from the database
  const getTotalUsage = (result: HISTORY[]) => {
    const total = result.reduce(
      (acc, item) => acc + Number(item.aiResponse?.length || 0),
      0
    );
    setTotalUsage(total);
  };

  //Function to check if the current user is subscribed or not by checking the userSubscriptions table in the database using the user's email address
  const isCurrentUserSubscribed = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (!email) return;

      const result = await db
        .select()
        .from(userSubscriptions)
        .where(eq(userSubscriptions.email, email));

      if (result.length > 0) {
        setIsUserSubscribed(true);
        setMaxUsage(100000);
      }
    } catch (error) {
      console.error("Failed to check subscription status", error);
    }
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits Used:</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${(totalUsage / maxUsage) * 100}%` }}
          />
        </div>
        <h2 className="text-sm my-2">
          {totalUsage}/{maxUsage} credits used
        </h2>
      </div>

      <Link href={!isUserSubscribed ? "/dashboard/upgrade" : ""}>
        <Button
          variant="secondary"
          disabled={isUserSubscribed}
          className={`w-full my-3 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 hover:text-white ${
            isUserSubscribed && "bg-primary text-white"
          }`}
        >
          {isUserSubscribed ? "Pro User" : "Upgrade"}
        </Button>
      </Link>
    </div>
  );
};

export default UsageTrack;
