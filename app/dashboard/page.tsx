"use client";

import SearchSection from "@/components/dashboard/SearchSection";
import TemplateListSection from "@/components/dashboard/TemplateListSection";
import React, { useState } from "react";

export default function DashboardPage() {
  const [userSearchInput, setUserSearchInput] = useState("");

  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(val: string) => setUserSearchInput(val)} />

      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}
