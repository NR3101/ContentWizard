"use client";

import Templates from "@/app/(data)/Templates";
import FormSection from "@/components/createContent/FormSection";
import OutputSection from "@/components/createContent/OutputSection";
import { TEMPLATE } from "@/components/dashboard/TemplateListSection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { TotalUsageContext } from "@/contexts/TotalUsageContext";
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
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { isUserSubscribed } = useContext(UserSubscriptionContext);
  const router = useRouter();
  const { toast } = useToast();

  // Get the selected template from the slug in the URL and find it in the Templates array
  const selectedTemplate: TEMPLATE = Templates.find(
    (template) => template.slug === props.params["template-slug"]
  ) as TEMPLATE;

  // Function to calculate the cost of generating AI content dynamically
  const calculateContentGenerationCost = (aiResponse: string) => {
    // Example: cost calculation based on response length
    const costPerCharacter = 0.5; // Define cost per character or any other metric
    return aiResponse.length * costPerCharacter;
  };

  // function to generate AI content based on the user's form data and the selected template
  const generateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    const result = await chatSession.sendMessage(finalAIPrompt);

    // Calculate the dynamic cost based on the AI response
    const contentGenerationCost = calculateContentGenerationCost(
      result.response.text()
    );

    // Check if the user has enough credits to cover the cost
    if (totalUsage + contentGenerationCost > 10000 && !isUserSubscribed) {
      setLoading(false); // Ensure loading is set to false on failure
      router.push("/dashboard/upgrade");

      return toast({
        title: "You don't have enough credits to generate this content.",
        description: "Please upgrade to continue using the app.",
        variant: "destructive",
      });
    }

    // Proceed with updating the AI output and saving to the database
    setAIOutput(result.response.text());
    await saveToDB(
      JSON.stringify(formData),
      selectedTemplate.slug,
      result.response.text()
    );

    // Calculate the new total usage first
    const newTotalUsage = totalUsage + contentGenerationCost;
    // Then set it directly
    setTotalUsage(newTotalUsage);

    setLoading(false);
  };

  // function to save the user's form data and the AI response to the database
  const saveToDB = async (
    formData: any,
    slug: string,
    aiResponse: string
  ) => {};

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
