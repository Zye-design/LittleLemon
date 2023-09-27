import React from "react";
import "./Button.css";

const Button = ({ title, onClick, type, ...props }) => {
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
      className="button"
      onClick={handleClick}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
