import React from "react";
import ChildComponent from "./ChildComponent";
import { useSelector } from "react-redux";

const ParentComponent = () => {
  const { bgColor } = useSelector((state) => state.color);

  return (
    <div
      className="text-center vh-100 d-flex justify-content-center align-items-center flex-column"
      style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}
    >
      <h1 className="fw-bold mb-5">Parent Component</h1>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
