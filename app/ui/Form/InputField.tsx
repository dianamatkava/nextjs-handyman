import { MdOutlineMail } from "react-icons/md";
import React from "react";

export default function InputField (
  {name, label, value, placeholder, isRequired, children}: {
    name: string,
    label: string,
    value?: string,
    placeholder?: string,
    isRequired?: boolean,
    children?: React.ReactNode,
  }
) {
  return (
    <div className="relative self-stretch h-fit flex-col justify-start items-start gap-2.5 flex">
      <label
        className="self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
        {label} {isRequired && <span className={'text-red-600 px-1'}>*</span>}
      </label>
      <div
        className="self-stretch h-fit bg-slate-100 rounded-lg justify-center items-center gap-1 inline-flex">
        <div
          className="relative grow shrink basis-0 self-stretch px-4 py-1.5 rounded-lg justify-start items-center gap-1 flex">
          {children}
          <input
            type="email"
            name={name}
            placeholder={placeholder}
            className="focus:outline-none focus:border-transparent w-full text-[#595959] bg-slate-100 text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight">
          </input>
        </div>
      </div>
    </div>
  )
}