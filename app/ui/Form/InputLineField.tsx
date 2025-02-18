import React from 'react';

const InputLineField = ({label, placeholder, name, type="input", required=true, inputClassName="", labelClassName="", children=null}: {label: string, placeholder: string, required?: boolean}) => {
  return (
    <div className={`relative w-full flex flex-col items-start justify-start text-xs gap-2`}>
      <label htmlFor={label} className={`text-white font-semibold ${labelClassName}`}>
        {label}
        {required && <span className={'text-red-600 px-1'}>*</span>}
      </label>
      <input name={name} type={type} className={`rounded-3xl py-3 text-xs px-2 w-full ${inputClassName}`} placeholder={placeholder} required={required}/>
      {children && children}
    </div>
  );
}

export default InputLineField;
