import React from "react";

type ChildProps = {
  color: string;
  onButtonClick: () => void;
};

export const Child: React.FC<ChildProps> = ({
  color,
  onButtonClick,
  children,
}) => {
  return (
    <div>
      {children}
      {color}
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
};
