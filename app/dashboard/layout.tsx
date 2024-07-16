import Header from "@/components/dashboard/Header";
import SideNav from "@/components/dashboard/SideNav";
import TotalUsageProvider from "@/contexts/TotalUsageContext";
import UpdateCreditUsageProvider from "@/contexts/UpdateCreditUsageContext";
import UserSubscriptionProvider from "@/contexts/UserSubscriptionContext";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <TotalUsageProvider>
      <UserSubscriptionProvider>
        <UpdateCreditUsageProvider>
          <div className="bg-slate-100 h-full min-h-screen">
            <div className="hidden md:w-64 md:block fixed">
              <SideNav />
            </div>
            <div className="md:ml-64">
              <Header />
              {children}
            </div>
          </div>
        </UpdateCreditUsageProvider>
      </UserSubscriptionProvider>
    </TotalUsageProvider>
  );
}
