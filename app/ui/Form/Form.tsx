"use client";

import TextArea from "@/app/ui/Form/TextArea";
import { MdOutlineMail } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import InputLineField from "@/app/ui/Form/InputLineField";
import { useState } from "react";

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error: any) {
      console.error(`Failed to submit form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {formSubmitted ? (
        <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
          <h3 className="text-gray-500 pb-2 text-sm font-bold">
            Your Message Sent Successfully
          </h3>
          <span className="bg-black mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-500 mb-10 text-base leading-relaxed">
            Thank you for reaching out to me. I will process your request
            shortly. I will contact you within few hours.
          </p>
          <div
            className={`justify-center items-center gap-0.5 flex group underline`}
          >
            <button
              onClick={() => setFormSubmitted(false)}
              className="text-[#414141] text-xsm font-bold leading-tight text-nowrap group-cursor-pointer hover:text-[#949494]"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="w-full h-fit flex-col justify-center items-start gap-5 inline-flex"
        >
          <InputLineField
            name="name"
            label="Full Name"
            placeholder={"John Doe"}
            required={true}
            labelClassName={"text-black"}
            inputClassName={
              "rounded-lg w-full text-[#595959] bg-slate-100 text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight"
            }
          >
            <div className="z-10 absolute bottom-3 left-2">
              <MdOutlineMail size={18} />
            </div>
          </InputLineField>
          <InputLineField
            name="email"
            label="Email Address"
            placeholder={"example@gmail.com"}
            required={true}
            labelClassName={"text-black"}
            inputClassName={
              "rounded-lg w-full text-[#595959] bg-slate-100 text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight"
            }
          >
            <div className="z-10 absolute bottom-3 left-2">
              <MdOutlineMail size={18} />
            </div>
          </InputLineField>
          <InputLineField
            name="phone"
            label="Phone Number"
            placeholder={"+1 123 456 7890"}
            required={false}
            labelClassName={"text-black"}
            inputClassName={
              "rounded-lg w-full text-[#595959] bg-slate-100 text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight"
            }
          >
            <div className="z-10 absolute bottom-3 left-2">
              <MdOutlineMail size={18} />
            </div>
          </InputLineField>
          <TextArea
            name={"message"}
            label={"Enter your message"}
            placeholder={"Enter your message"}
            required={false}
          >
            <LuMessageCircleMore size={18} />
          </TextArea>
          <div className="w-[6.25rem] h-[2.35rem] rounded-[40px] border bg-[#fe7800] border-[#fe7800] justify-center items-center gap-2.5 flex hover:bg-[#fe7800]/80 transition-all duration-300">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit text-white text-xs font-semibold font-['Plus Jakarta Sans']"
            >
              {isSubmitting ? "Sending..." : "Contact"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
