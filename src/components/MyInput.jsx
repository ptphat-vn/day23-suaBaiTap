import React from "react";

export const MyInput = (props) => {
  const { type, placeholder, value, handleOnChange } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};
