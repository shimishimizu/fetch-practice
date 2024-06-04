import React from "react";

const Button = ({
  label,
  clickHandler,
}: {
  label: string;
  clickHandler?: () => void;
}) => {
  return (
    <button onClick={clickHandler} className="border p-4 rounded-full w-20 h-5">
      {label}
    </button>
  );
};

export default Button;
