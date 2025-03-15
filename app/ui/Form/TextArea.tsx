import React from "react";

export default function TextArea (
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
    <div className="self-stretch h-fit flex-col justify-start items-start gap-2.5 flex">
      <label
        className="self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight">
        {label}{isRequired && <span className={'text-red-600 px-1'}>*</span>}
      </label>
      <div className="self-stretch h-fit bg-slate-100 rounded-lg justify-start items-start gap-1 inline-flex">
        <div className="h-28 grow shrink basis-0 self-stretch px-4 py-1.5 rounded-lg justify-start items-start gap-1 flex">
        <div className="w-fit h-full pt-2">
          {children}
        </div>
          <textarea placeholder={placeholder} name={name} required={isRequired} maxLength={5000}
                    className="resize-none w-full h-full text-[#595959] text-sm font-normal font-['Plus Jakarta Sans'] placeholder:text-gray-500 placeholder-opacity-100">
          </textarea>
        </div>
      </div>
    </div>
  )
}