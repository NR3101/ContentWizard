import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function SettingsPage() {
  return (
    <div className="p-5 flex items-center justify-center h-full">
      <UserProfile routing="hash" />
    </div>
  );
}
