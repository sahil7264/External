import React from "react";
import { TableComponent } from "./tableComponent";
const MainComponent = () => {
  return (
    <div>
      <TableComponent />
      <div
        className="color-green"
        style={{
          color: "#238441",
          fontSize: " 1rem",
          fontWeight: "600",
          borderTop: "1px solid black",
          marginTop: "1rem",
        }}
      >
        6 selected
      </div>
    </div>
  );
};

export default MainComponent;
