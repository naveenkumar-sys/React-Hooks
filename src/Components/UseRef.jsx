import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState([]);
  const [clicked, setClicked] = useState(false);
  //useRef is used to directly access DOM elements or store values without re-rendering the UI.
  const inputRef = useRef(); //using use ref hook and storing it into the variable

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addList = () => {
    setShowText((prev) => [...prev, text]);
    setClicked(true);
    inputRef.current.focus(); // use dom method focus to focus the input after clicked
  };
  //initializing use effect to handle the focus method by only once after reload
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef} // adding reference to input so that only ref will know which input i focus
        type="text"
        placeholder="enter a text"
        className="border p-3 m-5"
        onChange={(e) => handleChange(e)}
        value={text}
      />
      <button onClick={addList} className="border px-3 py-1 rounded-sm">
        Show List
      </button>
      <div>
        {clicked
          ? showText.map((ele, index) => {
              return <p key={index}>{ele}</p>;
            })
          : ""}
      </div>
    </div>
  );
};

export default UseRef;
