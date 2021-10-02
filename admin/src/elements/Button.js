import React from "react";
import { Link } from "react-router-dom";

const Button = ({ edit, onClick, label, path, link, create }) => {
  if (edit) {
    return (
      <button
        className="px-6 py-2 text-white transition-all duration-300 bg-indigo-800 rounded-lg hover:bg-indigo-700"
        type="sumbit"
        onClick={onClick}
      >
        Update
      </button>
    );
  }

  if (create) {
    return (
      <button
        className="px-6 py-2 text-white transition-all duration-300 bg-indigo-800 rounded-lg hover:bg-indigo-700"
        type="sumbit"
        onClick={onClick}
      >
        Create
      </button>
    );
  }

  if (link) {
    return (
      <Link
        to={path}
        className="px-4 py-2 text-white transition-all duration-300 bg-indigo-800 rounded-lg hover:bg-indigo-700"
      >
        {label}
      </Link>
    );
  }

  return <button>Button</button>;
};

export default Button;
