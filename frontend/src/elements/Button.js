import React from "react";

import { Link } from "react-router-dom";

const Button = ({
  children,
  play,
  info,
  login,
  type,
  signin,
  register,
  onClick,
  movie,
}) => {
  if (register) {
    return (
      <button
        onClick={onClick}
        type={type}
        className="w-2/5 px-4 py-2 font-semibold text-white"
        style={{ backgroundColor: "red" }}
      >
        {children}
      </button>
    );
  }
  if (signin) {
    return (
      <Link
        to="/login"
        type={type}
        className="px-4 py-2 font-semibold text-white rounded-lg"
        style={{ backgroundColor: "red" }}
      >
        {children}
      </Link>
    );
  }
  if (login) {
    return (
      <button
        type={type}
        className="w-full px-4 py-2 font-semibold text-white"
        style={{ backgroundColor: "red" }}
      >
        {children}
      </button>
    );
  }
  if (play) {
    return (
      <Link
        to={movie ? `/watch/${movie[0]?._id}` : '#'}
        className="px-4 py-2 font-semibold text-black bg-white rounded-lg"
      >
        {children}
      </Link>
    );
  }

  if (info) {
    return (
      <button className="px-4 py-2 font-semibold text-white transition-all duration-300 bg-gray-500 rounded-lg hover:bg-gray-400">
        {children}
      </button>
    );
  }
  return (
    <button className="px-4 py-2 font-semibold text-black bg-white rounded-lg">
      {children}
    </button>
  );
};

export default Button;
