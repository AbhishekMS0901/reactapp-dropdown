// Importing the CSS file for styling the App component
import "./App.css";

// Importing the Dropdown component from the specified path
import { Dropdown } from "./Components/dropDown";

// Function component representing the main App
function App() {
  // Defining the dropdown values to be displayed
  const dropDownValues = ["Yes", "Probably not"];

  return (
    <div className="container">
      {/* Heading for the dropdown question */}
      <h1 id="dropdownHeader">Should you use a dropdown?</h1>

      {/* Rendering the Dropdown component and passing the values as props */}
      <Dropdown values={dropDownValues} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
