"use client";

import { TEMPLATE } from "../dashboard/TemplateListSection";
import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

const FormSection = ({
  selectedTemplate,
  setUserFormData,
  loading,
}: {
  selectedTemplate: TEMPLATE;
  setUserFormData: (data: any) => void;
  loading: boolean;
}) => {
  const [formData, setFormData] = useState({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserFormData(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white">
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-3xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full py-6 text-sm lg:text-lg"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin mr-2" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
