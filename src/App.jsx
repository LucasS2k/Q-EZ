import { useState } from "react";

import "./App.css";
import { questions } from "./data/data";
import Questionary from "./components/questionary/questionary";

function App() {
  return (
    <>
      <Questionary></Questionary>
    </>
  );
}

export default App;
