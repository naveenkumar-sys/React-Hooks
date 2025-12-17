import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     console.log("button is clicked");
  //   };

  //definition -useCallback —  useCallback is used to remember a function so that React does not create it again and again on every re-render.

  // Why this is needed (in plain words)

  // In React, when state changes → component re-renders

  // On every re-render, functions are created again

  // New function = new memory reference

  // Child components think:

  // “Oh, my prop changed”

  // Child re-renders ❌

  // In above function is clicked function for child , It is send as props and wrapped under rect.memo because remember the value ,here problem once we increase the count also the child component are also rendering to avoid that we use useCallback hook
  // this function run only once in the starting of component reload , unless we clicked the btn in child It does not run
  //UseCallback - remembers the function
  const handleClick = useCallback(() => {
    console.log("button is clicked");
  }, []);

  return (
    <div>
      <h1>count:{count}</h1>
      <button
        className="border px-3 py-1"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
      <UseCallbackChild handleClick={handleClick} />
    </div>
  );
};

export default UseCallback;
