import { useState } from 'react';

const Checkbox = ({ label, name, children }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="inline-flex gap-2 items-center justify-start relative">
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="cursor-pointer"
      />
      {children ? children : <label htmlFor={name} className="cursor-pointer">{label}</label>}
    </div>
  );
};

export default Checkbox;
