import React from "react";

interface InputProps {
  title: string;
  inputType?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ title, placeholder, inputType }) => {
  return (
    <div className=" flex flex-col relative kk-mt-4">
      <label
        htmlFor=""
        className="absolute top-[-25%] left-[2%] h5 z-10 kk-pr-4 kk-pl-2 kk-bg-white kk-color-primary kk-font-weight-400"
      >
        {title}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="h-100  kk-p-3 kk-px-4 kk-color-primary-dark kk-border kk-border-primary rounded-lg"
      />
    </div>
  );
};

export default Input;
