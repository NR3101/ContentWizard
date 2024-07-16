"use client";

import Templates from "@/app/(data)/Templates";
import FormSection from "@/components/createContent/FormSection";
import OutputSection from "@/components/createContent/OutputSection";
import { TEMPLATE } from "@/components/dashboard/TemplateListSection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { TotalUsageContext } from "@/contexts/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/contexts/UpdateCreditUsageContext";
import { UserSubscriptionContext } from "@/contexts/UserSubscriptionContext";
import { chatSession } from "@/utils/AIModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

export default function CreateNewContentPage(props: PROPS) {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState("");
  const { user } = useUser();
  const { totalUsage } = useContext(TotalUsageContext);
  const { isUserSubscribed } = useContext(UserSubscriptionContext);
  const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  const router = useRouter();
  const { toast } = useToast();

  // Get the selected template from the URL slug and find it in the Templates array
  const selectedTemplate = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  ) as TEMPLATE;

  // Function to calculate the cost of generating AI content dynamically
  const calculateContentGenerationCost = (aiResponse: string) => {
    const costPerCharacter = 0.5; // Define cost per character or any other metric
    return Math.floor(aiResponse.length * costPerCharacter);
  };

  //function to generate AI content based on the user input and the selected template
  const generateAIContent = async (formData: any) => {
    try {
      // Early exit if the user is not subscribed and doesn't have enough credits
      const initialCostEstimate = 1000; // Assuming a base cost, adjust as necessary
      if (totalUsage + initialCostEstimate >= 10000 && !isUserSubscribed) {
        router.push("/dashboard/upgrade");
        return toast({
          title: "You don't have enough credits to generate this content.",
          description: "Please upgrade to continue using the app.",
          variant: "destructive",
        });
      }

      setLoading(true);
      const finalAIPrompt = `${JSON.stringify(formData)}, ${
        selectedTemplate?.aiPrompt
      }`;
      const result = await chatSession.sendMessage(finalAIPrompt);

      // Calculate the dynamic cost based on the AI response
      const contentGenerationCost = calculateContentGenerationCost(
        result.response.text()
      );

      // Re-check with the actual cost
      if (totalUsage + contentGenerationCost >= 10000 && !isUserSubscribed) {
        router.push("/dashboard/upgrade");
        return toast({
          title: "Insufficient credits after content generation.",
          description: "Please upgrade to continue using the app.",
          variant: "destructive",
        });
      }

      setAIOutput(result.response.text());
      await saveInDB(
        JSON.stringify(formData),
        selectedTemplate?.slug,
        result.response.text()
      );
      setUpdateCreditUsage(Date.now());
    } catch (error) {
      console.error("Failed to generate AI content:", error);
      toast({
        title: "Error generating content",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  //function to save the generated AI content in the database
  const saveInDB = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/yyyy"),
    });
  };

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button className="flex gap-1 items-center">
          <ArrowLeft />
          Go Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          setUserFormData={(val) => generateAIContent(val)}
          loading={loading}
        />

        {/* Output/Text Editor Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}
