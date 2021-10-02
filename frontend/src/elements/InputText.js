import React from "react";

const InputText = ({ type, placeholder, name, register, value, onChange }) => {
  if (register) {
    return (
      <div className="w-full">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 text-white focus:outline-none"
          style={{ backgroundColor: "white", color: "black" }}
        />
      </div>
    );
  }
  return (
    <div className="w-full mb-5">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-white focus:outline-none"
        style={{ backgroundColor: "gray", color: "white" }}
      />
    </div>
  );
};

export default InputText;
