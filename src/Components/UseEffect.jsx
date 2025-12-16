import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  // useEffect is used to run side effects after a component renders.
  // Side effects = things outside normal UI rendering.
  //it does not return any value It only handle side effect

  //1.Run every time when everything id change-run every time when when every re-render
  // useEffect(()=>{
  //     console.log("useEffect is running");
  // })

  //2.Run when the given value changes - run every time when the given value change in dependency array
  // useEffect(()=>{
  //     console.log("useEffect is running");
  // },[counter1])

  //3.Run only once on component first re-load or re-render
  useEffect(() => {
    console.log("useEffect is running");
  }, []);
  return (
    <div>
      <h1>counter1:{counter1}</h1>
      <button
        className="border px-3 py-1"
        onClick={() => setCounter1((prev) => prev + 1)}
      >
        add
      </button>

      <h1>counter2:{counter2}</h1>
      <button
        className="border px-3 py-1"
        onClick={() => setCounter2((prev) => prev + 1)}
      >
        add
      </button>
    </div>
  );
};

export default UseEffect;
