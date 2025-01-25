import React from "react";
import ReactDOM from "react-dom/client"; // Ensure to import from "react-dom/client"
import Welcome from "./component/Welcome";  // This should match the default export

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(
    document.body.appendChild(document.createElement('div'))
  );
  
  root.render(<Welcome />);
});
