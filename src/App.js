import React from "react";
import { TableComponent } from "./components/tableComponent";
import { QuestionPage } from "./components/questionPage";
import MainComponent from "./components/mainComponent";
import { Companies } from "./components/Companies";
function App() {
  return (
    <div className="mt-10">
      {/* <MainComponent/> */}
      {/* <QuestionPage /> */}
      <Companies/>
    </div>
  );
}

export default App;


