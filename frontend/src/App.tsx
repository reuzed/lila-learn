import { useState } from "react";
import { extract } from "./extract";
import Reader from "./Reader";

function App() {
  const [threshhold, setThreshold] = useState(0);
  return (
    <>
      As a test have a <br />
      <br />
      <br />
      <input
        type="range"
        min="0.0"
        step="0.01"
        max="1.0"
        value={threshhold}
        onChange={(e) => setThreshold(Number(e.target.value))}
      ></input>
      <br />
      <Reader extract={extract} threshhold={threshhold} />
    </>
  );
}

export default App;
