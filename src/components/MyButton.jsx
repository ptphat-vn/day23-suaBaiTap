import React from "react";

export const MyButton = (props) => {
  const { children, handleClick } = props;
  return <button onClick={handleClick}>{children}</button>;
};
