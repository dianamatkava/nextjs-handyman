"use client"
import InputField from "@/app/ui/Form/InputField";
import CheckBoxField from "@/app/ui/Form/CheckBoxField";
import Link from "next/link";
import SuccessBox from "@/app/ui/Form/SuccessBox";
import {LuSend} from "react-icons/lu";
import {useState} from "react";
import InputLineField from "@/app/ui/Form/InputLineField";


export default function SubscribeForm() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (!formData.get('agreements')) {
      alert("Please read and agree to the Terms of Use");
      return;
    }

    const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

    formObject['message'] = 'Hi, I’m interested in your construction services. Please provide more information about how we can proceed. Thank you!'
    formObject['name'] = 'Customer'

    try {
      const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formObject),
      });

      if (response.ok) {
          setFormSubmitted(true);
      } else {
          const errorData = await response.json();
          console.error(errorData)
      }
    } catch (error) {
        console.error(`Failed to submit form: ${error.message}`);
    }
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return (
      <SuccessBox title={"Your Message Sent Successfully."} message={"We will process your request shortly."}/>
    )
  }

  return (
    <form onSubmit={(e)=> handleSubmitForm(e)} className="self-stretch h-[86.50px] flex-col justify-start items-start gap-4 flex w-[250px]">
      <div className="self-stretch justify-between items-center inline-flex w-full">
        <InputLineField label={'Email'} type={'email'} name={"email"} placeholder={"example@example.com"} labelClassName={'text-white'}>
          <div className="z-0 absolute bottom-3 right-1">

            <button type={'submit'}
                    className="justify-start items-center gap-2 flex ml-[-55px] cursor-pointer text-black font-semibold hover:text-gray-700">
              <span className="text-black"><LuSend width={18}/></span>
              Send
            </button>
          </div>
        </InputLineField>
      </div>

      <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
        <CheckBoxField
          name={"agreements"}
        >
          <label htmlFor={"agreements"} className="cursor-pointer text-[#828181] text-xs font-normal flex gap-1">
            I agree to
            <Link href={'/termsofuse'} className={'underline'} target="_blank">Terms Of Use</Link>
            <span className={'text-red-600'}>*</span>
          </label>
        </CheckBoxField>
      </div>
    </form>
  )
}