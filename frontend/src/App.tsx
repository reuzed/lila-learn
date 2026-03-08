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
        className={`w-full appearance-none 
          bg-transparent [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-[50px] [&::-webkit-slider-thumb]:w-[50px]
          [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-purple-500`}
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
