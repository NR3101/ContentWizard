"use client";

import { createContext, ReactNode, useState } from "react";

interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: (val: number) => void;
}

export const TotalUsageContext = createContext<TotalUsageContextType>({
  totalUsage: 0,
  setTotalUsage: () => {},
});

const TotalUsageProvider = ({ children }: { children: ReactNode }) => {
  const [totalUsage, setTotalUsage] = useState(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
};

export default TotalUsageProvider;
