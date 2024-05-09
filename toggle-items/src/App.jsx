import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useToggleItems from "./Hooks/useToggleItem";

function App() {
  const items = ["A", "B", "C", "D"];
  const [currentItem, toggleState] = useToggleItems(items, 1);

  return (
    <div>
      <p>Current Item: {currentItem}</p>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;
