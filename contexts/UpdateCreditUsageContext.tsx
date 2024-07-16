"use client";

import { createContext, ReactNode, useState } from "react";

export const UpdateCreditUsageContext = createContext({
  updateCreditUsage: 0,
  setUpdateCreditUsage: (value: number) => {},
});

const UpdateCreditUsageProvider = ({ children }: { children: ReactNode }) => {
  const [updateCreditUsage, setUpdateCreditUsage] = useState(0);

  return (
    <UpdateCreditUsageContext.Provider
      value={{ updateCreditUsage, setUpdateCreditUsage }}
    >
      {children}
    </UpdateCreditUsageContext.Provider>
  );
};

export default UpdateCreditUsageProvider;
