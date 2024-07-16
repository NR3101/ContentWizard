"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";

function CopyButton({ aiResponse }: any) {
  const { toast } = useToast();

  return (
    <div>
      <Button
        variant="ghost"
        className="text-primary"
        onClick={() => {
          navigator.clipboard.writeText(aiResponse);
          toast({
            variant: "success",
            description: "Copied to clipboard",
            
          });
        }}
      >
        Copy
      </Button>
    </div>
  );
}

export default CopyButton;
