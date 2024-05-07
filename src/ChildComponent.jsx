import React, { useState } from "react";

const ChildComponent = ({ parentBackgroundColor, onColorChange }) => {
  const [color, setColor] = useState("");

  const darkenColor = (hexColor) => {
    return (
      "#" +
      hexColor
        .substring(1)
        .split("")
        .map((c) => Math.floor(parseInt(c, 16) * 0.8).toString(16))
        .join("")
    );
  };

  const handleChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    onColorChange(newColor); // Call the parent function to update background color
  };

  return (
    <div className="text-center">
      <div
        style={{ backgroundColor: darkenColor(parentBackgroundColor) }}
        className="d-inline-block p-5 rounded-4"
      >
        <h2>Child Component</h2>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default ChildComponent;
