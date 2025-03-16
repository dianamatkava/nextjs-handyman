import React from "react";
const InputLineField = ({
  label,
  placeholder,
  name,
  type = "input",
  required = true,
  inputClassName = "",
  labelClassName = "",
  children = null,
}: {
  label?: string;
  placeholder: string;
  required?: boolean;
  children?: React.ReactElement | null;
  name: string;
  type?: string;
  inputClassName?: string;
  labelClassName?: string;
}) => {
  return (
    <div
      className={`rounded-3xl relative w-full flex flex-col items-start justify-start text-xs gap-2`}
    >
      {label && (
        <label
          className={
            "self-stretch text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight" +
            ` ${labelClassName}`
          }
        >
          {label} {required && <span className={"text-red-600 px-1"}>*</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        className={`rounded-3xl pl-10 py-3 text-xs px-2 w-full ${inputClassName}`}
        placeholder={placeholder}
        required={required}
      />
      {children && children}
    </div>
  );
};

export default InputLineField;
