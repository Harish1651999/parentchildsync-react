import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // Initial background color

  // Function to handle color change
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="text-center vh-100 d-flex justify-content-center align-items-center flex-column"
      style={{ backgroundColor, minHeight: "100vh", padding: "20px" }}
    >
      <h1 className="fw-bold mb-5">Parent Component</h1>
      <ChildComponent
        parentBackgroundColor={backgroundColor}
        onColorChange={handleColorChange}
      />
    </div>
  );
};

export default ParentComponent;
