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
import { UpdateCreditUsageContext } from "@/contexts/UpdateCreditUsageContext";

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { isUserSubscribed, setIsUserSubscribed } = useContext(
    UserSubscriptionContext
  );
  const [maxUsage, setMaxUsage] = useState(10000);
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);

  // useEffect to get the data from the database and check if the user is subscribed
  useEffect(() => {
    user && getData();
    user && isCurrentUserSubscribe();
  }, [user]);

  //useEffect to get the data from the database and check if the user is subscribed
  useEffect(() => {
    user && getData();
  }, [updateCreditUsage && user]);

  //function to get the data from the database
  const getData = async () => {
    const result = (await db
      .select()
      .from(AIOutput)
      .where(
        eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress!)
      )) as HISTORY[];

    getTotalUsage(result);
  };

  //function to check if the current user is subscribed
  const isCurrentUserSubscribe = async () => {
    const result = await db
      .select()
      .from(userSubscriptions)
      .where(
        eq(userSubscriptions.email, user?.primaryEmailAddress?.emailAddress!)
      );
    if (result.length > 0) {
      setIsUserSubscribed(true);
      setMaxUsage(100000);
    }
  };

  //function to get the total usage of the user
  const getTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });

    setTotalUsage(total);
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
