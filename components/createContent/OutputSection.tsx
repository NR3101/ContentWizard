"use client";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";
import { useToast } from "../ui/use-toast";

const OutputSection = ({ aiOutput }: { aiOutput: string }) => {
  const editorRef = useRef<any>();
  const { toast } = useToast();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">
          Your AI Generated Content{" "}
          <span className="text-primary">Preview</span>
        </h2>
        <Button
          className="flex gap-2 items-center"
          onClick={() => {
            navigator.clipboard.writeText(aiOutput);
            toast({
              description: "Copied to clipboard",
              variant: "success",
            });
          }}
        >
          <Copy />
          Copy to Clipboard
        </Button>
      </div>

      <Editor
        height="500px"
        initialEditType="wysiwyg"
        initialValue="Your AI Generated Content will appear here...."
        useCommandShortcut={true}
        ref={editorRef}
      />
    </div>
  );
};

export default OutputSection;
