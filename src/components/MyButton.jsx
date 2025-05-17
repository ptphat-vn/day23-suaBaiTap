import React from "react";

export const MyButton = (props) => {
  const { children, handleClick, type = "button", className } = props;
  return (
    <button type={type} className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
