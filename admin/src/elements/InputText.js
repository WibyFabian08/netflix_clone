import React from "react";

const InputText = ({
  label,
  placeholder,
  type,
  bordered,
  value,
  onChange,
  name,
}) => {
  if (bordered) {
    return (
      <div className="flex flex-col mb-5">
        <label htmlFor="username">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:border-indigo-800 focus:outline-none"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="username">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-2 border-b border-black border-solid focus:border-indigo-800 focus:outline-none"
      />
    </div>
  );
};

export default InputText;
