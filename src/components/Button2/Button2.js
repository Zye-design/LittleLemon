import React from "react";
import "./Button2.css";

const Button2 = ({ title, onClick, type, ...props }) => {
  const handleClick = (e) => {
    if (type !== 'submit') {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className="button2"
      onClick={handleClick}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button2;
