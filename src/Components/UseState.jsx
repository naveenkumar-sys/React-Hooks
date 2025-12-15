import React, { useState } from "react";

const UseState = () => {
  // useState hooks -  store and function to update the value  It re-render the UI and visible in the screen (changed value)
  const [num, setNum] = useState(0);
  //array state
  const [list, setList] = useState(["apple", "orange", "grapes", "Banana"]);
  const [value, setValue] = useState(""); //for get full value what we are typed

  const [showList, setShowList] = useState(false);

  const handleAdd = () => {
    setNum((prev) => prev + 1);
  }; //  add the count

  //handle button and update the list
  const handleList = () => {
    setShowList(true);
    setList((prev) => [...prev, value]);
  }; //once we click the button state variable is change and add the value t0 og list
  const handleChange = (e) => {
    // console.log(value);
    setValue(e.target.value); //getting the full string
  };
  //   console.log(value);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full text-center">
        <h1 className="m-3">count:{num}</h1>

        <button
          className="border px-2 py-1 m-3 block mx-auto"
          onClick={handleAdd}
        >
          Add
        </button>

        <input
          type="text"
          className="border p-2 block mx-auto"
          onChange={handleChange}
          placeholder="enter a new fruit"
          value={value}
        />

        <button
          className="border px-2 py-1 m-3 block mx-auto"
          onClick={handleList}
        >
          show List
        </button>

        {showList && (
          <ul className="list-disc text-left mx-auto w-fit">
            {list.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UseState;
