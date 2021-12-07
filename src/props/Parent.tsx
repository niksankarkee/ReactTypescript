import React from "react";
import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="red" onButtonClick={() => console.log("Clicked")}>
      Some Text
    </Child>
  );
};

export default Parent;
