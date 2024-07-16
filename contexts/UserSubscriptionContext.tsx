"use client";

import { createContext, ReactNode, useState } from "react";

interface UserSubscriptionContextType {
  isUserSubscribed: boolean;
  setIsUserSubscribed: (val: boolean) => void;
}

export const UserSubscriptionContext =
  createContext<UserSubscriptionContextType>({
    isUserSubscribed: false,
    setIsUserSubscribed: () => {},
  });

const UserSubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [isUserSubscribed, setIsUserSubscribed] = useState(false);

  return (
    <UserSubscriptionContext.Provider
      value={{ isUserSubscribed, setIsUserSubscribed }}
    >
      {children}
    </UserSubscriptionContext.Provider>
  );
};

export default UserSubscriptionProvider;
