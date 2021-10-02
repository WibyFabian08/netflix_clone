import React from "react";

const TextArea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="username">{label}</label>
      <textarea
        name="desc"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:border-indigo-800 focus:outline-none"
        style={{width: '100%'}}
        rows="5"
      ></textarea>
    </div>
  );
};

export default TextArea;
