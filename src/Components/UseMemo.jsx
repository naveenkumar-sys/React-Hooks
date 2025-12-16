import React, { useMemo, useState } from "react";

const UseMemo = () => {
  //     useMemo is used to remember the result of a calculation so React doesn’t recalculate it again and again.
  // In short:
  // 👉 Performance optimization hook
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  //   const memorize = slowProcess(count); //here when we increase the count that slowProcess fn will run but we click the show list slowProcess are also will run it will slowdown the process by avoiding this we use use memo it will works based on value
  const calculation = useMemo(() => slowProcess(count), [count]); // here we use  useMemo hooks to avoid unnecessary re-rendering to memorize the value , here we only pass the value not function

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleClick = () => {
    setText((prev) => [...prev, "New Text"]);
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={addCount} className="border px-3 py-1">
        Add Count
      </button>
      <h2>{calculation}</h2>
      <div>
        <button onClick={handleClick} className="border px-3 py-1">
          show List
        </button>
        <li>{text}</li>
      </div>
    </div>
  );
};

export default UseMemo;

const slowProcess = (count) => {
  for (let i = 0; i <= 1000000; i++) {
    console.log("processing");
    return (count += 1);
  }
};
