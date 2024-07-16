import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/components/dashboard/TemplateListSection";
import CopyButton from "@/components/history/CopyButton";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";

import Image from "next/image";
import React from "react";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function HistoryPage() {
  const user = await currentUser();

  if (!user?.primaryEmailAddress?.emailAddress) {
    // Handle the case where the email address is undefined.
    return;
  }

  const HistoryList: HISTORY[] = (await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id))) as HISTORY[];

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find(
      (item) => item.slug == slug
    );
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">
        Search your previously generated AI content
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-1 lg:col-span-2">TEMPLATE</h2>
        <h2 className="col-span-1 lg:col-span-2">AI RESPONSE</h2>
        <h2 className="hidden lg:block">DATE</h2>
        <h2 className="hidden lg:block">WORDS</h2>
        <h2 className="col-span-1">COPY</h2>
      </div>
      {HistoryList.map((item: HISTORY, index: number) => (
        <>
          <div className="grid grid-cols-3 lg:grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-1 lg:col-span-2 flex gap-2 items-center">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon}
                width={25}
                height={25}
                alt="icon"
              />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className="col-span-1 lg:col-span-2 line-clamp-3 mr-3">
              {item?.aiResponse}
            </h2>
            {/* Hidden on screens smaller than lg */}
            <h2 className="hidden lg:block">{item.createdAt}</h2>
            <h2 className="hidden lg:block">{item?.aiResponse.length}</h2>
            <h2 className="col-span-1">
              <CopyButton aiResponse={item.aiResponse} />
            </h2>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default HistoryPage;
