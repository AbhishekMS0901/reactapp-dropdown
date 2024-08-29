import { useState } from "react";

export const Dropdown = ({ values }) => {
  // State to keep track of the currently selected value
  const [selectedValue, setSelectedValue] = useState("Select");
  
  // State to manage whether the dropdown menu is visible
  const [isSelect, setIsSelect] = useState(false);

  // Function to handle option selection
  const setOptionValue = (item) => {
    setSelectedValue(item); // Update the selected value
    setIsSelect(false); // Close the dropdown menu
  };

  // Function to handle hover, opening the dropdown
  const handleHover = () => {
    setIsSelect(true); // Show the dropdown menu
  };

  return (
    <>
      {/* Dropdown select element */}
      <select
        className="selectComponent"
        value={selectedValue} // Controlled component with selectedValue
        onChange={(e) => setOptionValue(e.target.value)} // Handle change event
        onMouseEnter={handleHover} // Show dropdown on hover
      >
        <option>{selectedValue}</option> {/* Show the current selected value */}
      </select>

      {/* Conditionally render dropdown items */}
      {isSelect &&
        values.map((item, index) => {
          return (
            <button
              key={index} // Added key for list items
              id="dropDownValue"
              onClick={() => setOptionValue(item)} // Handle option selection
            >
              {item}
            </button>
          );
        })}
    </>
  );
};
